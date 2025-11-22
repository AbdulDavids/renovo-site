import { useEffect } from 'react';

interface MetaOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  canonical?: string;
}

export const useDocumentMeta = (options: MetaOptions) => {
  useEffect(() => {
    // Update title
    if (options.title) {
      document.title = options.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        const [attr, value] = selector.replace(/[\[\]]/g, '').split('=');
        element.setAttribute(attr, value.replace(/['"]/g, ''));
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    if (options.description) {
      updateMetaTag('meta[name="description"]', options.description);
    }

    if (options.keywords) {
      updateMetaTag('meta[name="keywords"]', options.keywords);
    }

    if (options.ogTitle) {
      updateMetaTag('meta[property="og:title"]', options.ogTitle);
    }

    if (options.ogDescription) {
      updateMetaTag('meta[property="og:description"]', options.ogDescription);
    }

    if (options.ogUrl) {
      updateMetaTag('meta[property="og:url"]', options.ogUrl);
    }

    if (options.canonical) {
      updateLinkTag('canonical', options.canonical);
    }

    // Cleanup function to restore original values if needed
    return () => {
      // Optionally restore original values here
    };
  }, [options]);
};

