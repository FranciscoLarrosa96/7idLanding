import { Component } from '@angular/core';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  gradient: string;
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
})
export class Blog {
  posts: BlogPost[] = [
    {
      slug: 'marketing-ia',
      title: 'Marketing para IA: Cómo las marcas líderes están conquistando la era de la inteligencia artificial',
      excerpt:
        'Descubrí las estrategias que las empresas más innovadoras utilizan para posicionarse en la era de la IA. Desde el branding hasta los canales emergentes.',
      category: 'Inteligencia Artificial',
      date: '9 de Marzo, 2026',
      readTime: '10 min de lectura',
      featured: true,
      gradient: 'from-slate-900 via-red-950 to-slate-900',
    },
  ];

  get featuredPost(): BlogPost | undefined {
    return this.posts.find(p => p.featured);
  }
}
