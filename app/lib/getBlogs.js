import { client } from "./contentful";

export async function getAllBlogs() {
  try {   
    console.log("Fetching blogs from Contentful...");
    
    const entries = await client.getEntries({
      content_type: "blog",
      order: "-fields.publishDate",
    });
    
    console.log("Contentful response:", entries);
    console.log("Number of blogs found:", entries.items?.length || 0);
    
    if (entries.items && entries.items.length > 0) {
      console.log("Blog titles:", entries.items.map(item => item.fields?.title));
    }
    
    return entries.items || [];
  } catch (error) {
    console.error("Error fetching blogs from Contentful:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      status: error.status
    });
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    console.log("Fetching blog by slug:", slug);
    
    const entries = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    });
    
    console.log("Blog by slug response:", entries);
    
    return entries.items?.[0] || null;
  } catch (error) {
    console.error("Error fetching blog by slug from Contentful:", error);
    return null;
  }
}
