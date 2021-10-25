<ion-app>
  <ion-header class="ion-no-border">
    <ion-toolbar color="medium">
      <ion-title
        ><ion-text
          routerLink="home"
          style="cursor: pointer; font-family: Stencil"
          routerLink="home"
          >IK Creatives</ion-text
        ></ion-title
      >

      <ion-menu-button icon-only slot="start" class="icon-size">
        <ion-icon name="menu" size="large"></ion-icon><p></p>
      </ion-menu-button>


      <!-- <ion-buttons icon-only slot="end" (click)="openFB()" class="icon-size1">
        <ion-icon name="logo-facebook"></ion-icon>
      </ion-buttons>
      <ion-buttons icon-only slot="end" (click)="openLink('instagram')" class="icon-size1">
        <ion-icon name="logo-instagram"
          ></ion-icon>
      </ion-buttons>



      <ion-buttons icon-only slot="end" (click)="openLink('youtube')" class="icon-size1">
        <ion-icon name="logo-youtube"></ion-icon>
      </ion-buttons>

      <ion-buttons icon-only slot="end" (click)="openLink('whatsapp')" class="icon-size1">
        <ion-icon name="logo-whatsapp"
          ></ion-icon>
      </ion-buttons> -->

      <ion-fab vertical="center" horizontal="end" edge="true">

        <ion-fab-button icon-only class="icon-size1" size="small"><ion-icon size="small" name="person"
          ></ion-icon ></ion-fab-button>
        <ion-fab-list side="start">
          <!-- <ion-fab-button (click)="openLink('instagram')" size="small">
            <ion-icon  name="logo-instagram"></ion-icon>
          </ion-fab-button>
          <ion-fab-button (click)="openLink('whatsapp')"  >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </ion-fab-button>
          <ion-fab-button (click)="openLink('youtube')" >
            <ion-icon  name="logo-youtube"></ion-icon>
          </ion-fab-button> -->
        <ion-icon   style="cursor: pointer;" name="logo-instagram" (click)="openLink('youtube')" ></ion-icon>
         <ion-icon   style="cursor: pointer;padding-left: 7px; padding-right: 7px;;" name="logo-youtube" (click)="openLink('youtube')" ></ion-icon>
          <ion-icon  style="cursor: pointer;" name="logo-whatsapp" (click)="openLink('whatsapp')" ></ion-icon>
        </ion-fab-list>
        </ion-fab>




      <!-- <ion-buttons icon-only slot="end" class="icon-size1">
        <ion-icon name="lock-closed" routerLink="admin-login"></ion-icon>
      </ion-buttons> -->
    </ion-toolbar>
  </ion-header>

  <ion-menu side="start" menuId="first" contentId="main" color="medium">
    <ion-content fullscreen>

      <ion-img
        alt=""
        [src]="'../assets/images/logo1.svg'"
        style="width: 50%"
      ></ion-img>

      <ion-item routerLink="home" (click)="closeMenu()">Home</ion-item>
      <ion-item style="cursor: pointer;">
        <ion-icon
          (click)="openPortfolio()"
          *ngIf="!visible"
          slot="end"
          name="chevron-down-outline"
        ></ion-icon>
        <ion-icon
          (click)="openPortfolio()"
          *ngIf="visible"
          slot="end"
          name="close-outline"
        ></ion-icon
        >Portfolios</ion-item
      >
      <ion-list *ngIf="visible">
        <ion-item [routerLink]="['/home', 'wedding']" (click)="closeMenu()"
          >Wedding Portfolio</ion-item
        >
        <ion-item [routerLink]="['/home', 'pre-wedding']" (click)="closeMenu()"
          >Pre-Wedding Portfolio</ion-item
        >
        <ion-item [routerLink]="['/home', 'corporate']" (click)="closeMenu()"
          >Corporate Portfolio</ion-item
        >
        <ion-item [routerLink]="['/home', 'food']" (click)="closeMenu()"
          >Food Gallery</ion-item
        >
        <ion-item [routerLink]="['/home', 'interior']" (click)="closeMenu()"
          >Interior Gallery</ion-item
        >
        <ion-item [routerLink]="['/home', 'maternity']" (click)="closeMenu()"
          >Maternity Gallery</ion-item
        >
        <ion-item [routerLink]="['/home', 'fashion']" (click)="closeMenu()"
          >Fashion Gallery</ion-item
        >
        <ion-item [routerLink]="['/home', 'product']" (click)="closeMenu()"
          >Product Gallery</ion-item
        >
        <ion-item [routerLink]="['/home', 'travel']" (click)="closeMenu()"
          >Travel Gallery</ion-item
        >
      </ion-list>
      <ion-item routerLink="video-gallery" (click)="closeMenu()"
        >Video Gallery</ion-item
      >


      <ion-item routerLink="contact-us" (click)="closeMenu()"
        >Write to us</ion-item
      >

      <ion-item routerLink="admin-login" (click)="closeMenu()"
      >Admin Login</ion-item
    >
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-app>
