/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  contactFormSchema,
  type ContactFormData,
  countries,
} from "@/lib/types";
import { toast } from "sonner";
import { useRef } from "react";

const formatPhoneNumber = (value: string, ddi: string) => {
  // Remove non-digits
  const numbers = value.replace(/\D/g, "");

  // Format based on DDI
  if (ddi === "+55") {
    // Brazilian format
    if (numbers.length <= 11) {
      let formatted = numbers;
      // Add parentheses
      if (numbers.length >= 2) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      }
      // Add hyphen
      if (numbers.length >= 7) {
        formatted = formatted.slice(0, -4) + "-" + formatted.slice(-4);
      }
      return formatted;
    }
  }

  // Default format for other countries
  return numbers;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showEmailError, setShowEmailError] = React.useState(false);
  const [selectedDDI, setSelectedDDI] = React.useState("+55");
  const emailTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      ddi: "+55",
      phone: "",
    },
  });

  React.useEffect(() => {
    return () => {
      if (emailTimeoutRef.current) {
        clearTimeout(emailTimeoutRef.current);
      }
    };
  }, []);

  // const validateEmail = async (email: string) => {
  //   console.log(email);
  //   if (emailTimeoutRef.current) {
  //     clearTimeout(emailTimeoutRef.current);
  //   }
  //   setShowEmailError(false);
  //   emailTimeoutRef.current = setTimeout(() => {
  //     setShowEmailError(true);
  //   }, 1000);
  // };

  async function onSubmit(data: ContactFormData) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast.success("Formulário enviado com sucesso!"); // ✅ Correct
      form.reset();
      setSubmitError(null);
    } catch (error: unknown) {
      console.error(error);
      toast.error("Ocorreu um erro ao enviar o formulário."); // ✅ Correct
      setSubmitError("Ocorreu um erro ao enviar o formulário.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 text-accent"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                      className={`pr-10 ${
                        !field.value
                          ? ""
                          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
                          ? "border-green-500 focus-visible:ring-green-500"
                          : showEmailError
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                      onChange={(e) => {
                        field.onChange(e);
                        // validateEmail(e.target.value);
                      }}
                      onBlur={() => {
                        field.onBlur();
                        setShowEmailError(true);
                      }}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {field.value &&
                        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value) ? (
                          <svg
                            className="h-5 w-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        ) : showEmailError ? (
                          <svg
                            className="h-5 w-5 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        ) : null)}
                    </div>
                  </div>
                </FormControl>
                {showEmailError &&
                  field.value &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value) && (
                    <p className="text-sm font-medium text-red-500 mt-1">
                      Email inválido!
                    </p>
                  )}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <FormField
              control={form.control}
              name="ddi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DDI</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedDDI(value);
                      form.setValue("phone", "");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="DDI" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[300px] p-0">
                      <div className="sticky top-0 p-2 bg-background border-b">
                        <Input
                          placeholder="Buscar DDI..."
                          className="h-8 px-3"
                          onChange={(e) => {
                            const selectContent =
                              document.querySelector('[role="listbox"]');
                            if (selectContent) {
                              const items =
                                selectContent.querySelectorAll(
                                  '[role="option"]'
                                );
                              items.forEach((item) => {
                                const text =
                                  item.textContent?.toLowerCase() || "";
                                const search = e.target.value.toLowerCase();
                                item.classList.toggle(
                                  "hidden",
                                  !text.includes(search)
                                );
                              });
                            }
                          }}
                        />
                      </div>
                      <div className="p-1">
                        {countries.map((country) => (
                          <SelectItem
                            key={`${country.ddi}-${country.pais}`}
                            value={String(country.ddi)}
                            className="px-3 py-2"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={country.img || "/placeholder.svg"}
                                alt={`Bandeira ${country.pais}`}
                                className="w-5 h-3 object-cover rounded-sm"
                              />
                              <span className="font-medium">
                                {country.ddi}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </div>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="tel"
                        placeholder={
                          selectedDDI === "+55"
                            ? "(99) 99999-9999"
                            : "999999999999"
                        }
                        {...field}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(
                            e.target.value,
                            selectedDDI
                          );
                          field.onChange(formatted);
                        }}
                        maxLength={selectedDDI === "+55" ? 15 : 15}
                        className={`pr-10 ${
                          !field.value
                            ? ""
                            : (selectedDDI === "+55" &&
                                field.value.replace(/\D/g, "").length === 11) ||
                              (selectedDDI !== "+55" &&
                                field.value.replace(/\D/g, "").length >= 8)
                            ? "border-green-500 focus-visible:ring-green-500"
                            : ""
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {field.value &&
                          ((selectedDDI === "+55" &&
                            field.value.replace(/\D/g, "").length === 11) ||
                          (selectedDDI !== "+55" &&
                            field.value.replace(/\D/g, "").length >= 8) ? (
                            <svg
                              className="h-5 w-5 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          ) : null)}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="lg:mt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r text-lg font-semibold from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
            {submitError && (
              <p className="text-sm font-medium text-red-500 text-center">
                {submitError}
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
