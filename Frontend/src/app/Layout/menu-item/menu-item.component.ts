import {
  ChangeDetectorRef,
  Component,
  Host,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-menuitem]',
  template: `
    <ng-container>
      <div
        *ngIf="root && item.visible !== false"
        class="layout-menuitem-root-text"
      >
        {{ item.label }}
      </div>
      <a
        *ngIf="(!item.routerLink || item.items) && item.visible !== false"
        [attr.href]="item.url"
        (click)="itemClick($event)"
        [ngClass]="item.class"
        [attr.target]="item.target"
        tabindex="0"
        pRipple
      >
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{ item.label }}</span>
        <i
          class="pi pi-fw pi-angle-down layout-submenu-toggler"
          *ngIf="item.items"
        ></i>
      </a>
      <a
        *ngIf="item.routerLink && !item.items && item.visible !== false"
        (click)="itemClick($event)"
        [ngClass]="item.class"
        [routerLink]="item.routerLink"
        routerLinkActive="active-route"
        [routerLinkActiveOptions]="
          item.routerLinkActiveOptions || {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored'
          }
        "
        [fragment]="item.fragment"
        [queryParamsHandling]="item.queryParamsHandling"
        [preserveFragment]="item.preserveFragment"
        [skipLocationChange]="item.skipLocationChange"
        [replaceUrl]="item.replaceUrl"
        [state]="item.state"
        [queryParams]="item.queryParams"
        [attr.target]="item.target"
        tabindex="0"
        pRipple
      >
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{ item.label }}</span>
        <i
          class="pi pi-fw pi-angle-down layout-submenu-toggler"
          *ngIf="item.items"
        ></i>
      </a>

      <ul *ngIf="item.items && item.visible !== false">
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
          <li
            app-menuitem
            [item]="child"
            [index]="i"
            [parentKey]="key"
            [class]="child.badgeClass"
          ></li>
        </ng-template>
      </ul>
    </ng-container>
  `,
})
export class AppMenuitemComponent implements OnInit {
  @Input() item: any;

  @Input() index!: number;

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

  @Input() parentKey!: string;

  active = false;

  key: string = '';

  constructor(private cd: ChangeDetectorRef, public router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params) => {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
      });
  }

  ngOnInit() {
    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);

    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }

  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored',
    });
  }

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
  }

  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active && !this.root;
  }
}
