import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  templateUrl: './blog-detail.html',
})
export class BlogDetail implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private document = inject(DOCUMENT);
  blogUrl!: SafeResourceUrl;

  ngOnInit() {
    // Build URL relative to current base, works for both dev and production
    const base = this.document.baseURI.replace(/\/$/, '');
    const url = `${base}/assets/blogs/marketing-ia.html`;
    this.blogUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
