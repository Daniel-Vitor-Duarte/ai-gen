import fs from "fs"
import path from "path"

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
}

// Function to extract metadata from article files
export async function getArticleMetadata(slug: string): Promise<Article | null> {
  try {
    // Define the path to the article file
    const filePath = path.join(process.cwd(), "app", "blog", "artigos", slug, "page.tsx")

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return null
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Extract title using regex
    const titleMatch = fileContent.match(/<h1[^>]*>(.*?)<\/h1>/s)
    const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, "") : "Untitled Article"

    // Extract excerpt using regex
    const excerptMatch = fileContent.match(/<p className="text-xl text-gray-300">(.*?)<\/p>/s)
    const excerpt = excerptMatch ? excerptMatch[1].replace(/<[^>]*>/g, "") : ""

    // Extract category using regex
    const categoryMatch = fileContent.match(/<span className="bg-blue-600[^>]*>(.*?)<\/span>/s)
    const category = categoryMatch ? categoryMatch[1].replace(/<[^>]*>/g, "").trim() : "Uncategorized"

    // Extract date using regex
    const dateMatch = fileContent.match(/<span className="text-gray-400 text-sm">(.*?)<\/span>/s)
    const date = dateMatch ? dateMatch[1].replace(/<[^>]*>/g, "").trim() : ""

    // Extract image using regex
    const imageMatch = fileContent.match(/<img[^>]*src="([^"]+)"[^>]*className="[^"]*w-full h-auto rounded-lg[^"]*"[^>]*>/s)
    const image = imageMatch ? imageMatch[1] : "/placeholder.svg"

    return {
      slug,
      title,
      excerpt,
      category,
      date,
      image,
    }
  } catch (error) {
    console.error(`Error extracting metadata for ${slug}:`, error)
    return null
  }
}

// Function to get all articles from the artigos directory
export async function getAllArticles(): Promise<Article[]> {
  try {
    // Define the path to the artigos directory
    const articlesDirectory = path.join(process.cwd(), "app", "blog", "artigos")

    // Get all subdirectories (each subdirectory is an article)
    const articleSlugs = fs
      .readdirSync(articlesDirectory)
      .filter((item) => fs.statSync(path.join(articlesDirectory, item)).isDirectory() && item !== "layout.tsx")

    // Get metadata for each article
    const articlesPromises = articleSlugs.map((slug) => getArticleMetadata(slug))
    const articlesData = await Promise.all(articlesPromises)

    // Filter out null values and sort by date (newest first)
    const articles = articlesData
      .filter((article): article is Article => article !== null)
      .sort((a, b) => {
        // Parse dates and sort (assuming date format is consistent)
        const dateA = new Date(a.date.split(" de ").reverse().join(" "))
        const dateB = new Date(b.date.split(" de ").reverse().join(" "))
        return dateB.getTime() - dateA.getTime()
      })

    return articles
  } catch (error) {
    console.error("Error getting articles:", error)
    return []
  }
}
