import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MetaService {
    constructor(
        private titleService: Title,
        private meta: Meta,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }
    updateTitle() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) { route = route.firstChild; }
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data)).subscribe((event) => {
                    this.titleService.setTitle(event['title']);
                    this.meta.removeTag("name='title'");
                    this.meta.removeTag("name='description'");
                    this.meta.removeTag("name='keywords'");
                    this.meta.removeTag("property='og:title'");
                    this.meta.removeTag("property='og:description'");
                    this.meta.removeTag("property='og:image'");
                    this.meta.removeTag("property='og:image:alt'");
                    this.meta.removeTag("property='og:url'");
                    this.meta.addTags([
                        { name: 'title', content: event['title_element'] },
                        { name: 'description', content: event['description'] },
                        { name: 'keywords', content: event['keywords'] },
                        { property: 'og:title', content: event['title_element'] },
                        { property: 'og:description', content: event['description'] },
                        { property: 'og:image', content: event['image'] },
                        { property: 'og:image:alt', content: event['image_alt'] },
                        { property: 'og:url', content: event['url'] },
                    ]);
                });
    }
}