import { supabase } from './supabase';

export const pdfBlogService = {
  // Get all PDF blogs
  async getAllPdfBlogs() {
    try {
      const { data, error } = await supabase
        .from('pdf_blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get single PDF blog by ID
  async getPdfBlogById(id) {
    try {
      const { data, error } = await supabase
        .from('pdf_blogs')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Create new PDF blog
  async createPdfBlog(pdfBlogData) {
    try {
      const { data, error } = await supabase
        .from('pdf_blogs')
        .insert([pdfBlogData])
        .select()
        .single();
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Upload thumbnail image (optional)
  async uploadThumbnail(file) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `thumb-${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `pdf-thumbnails/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('pdf-blogs')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('pdf-blogs')
        .getPublicUrl(filePath);

      return { success: true, url: data.publicUrl, fileName };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update PDF blog
  async updatePdfBlog(id, pdfBlogData) {
    try {
      const { data, error } = await supabase
        .from('pdf_blogs')
        .update(pdfBlogData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Delete PDF blog
  async deletePdfBlog(id) {
    try {
      const { error } = await supabase
        .from('pdf_blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Upload PDF to Supabase Storage
  async uploadPdf(file) {
    try {
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.pdf`;
      const filePath = `pdf-blogs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('pdf-blogs')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('pdf-blogs')
        .getPublicUrl(filePath);

      return { success: true, url: data.publicUrl, fileName };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Delete PDF from storage
  async deletePdf(fileName) {
    try {
      const { error } = await supabase.storage
        .from('pdf-blogs')
        .remove([`pdf-blogs/${fileName}`]);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};