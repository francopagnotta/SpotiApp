import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardplayerComponent } from './components/cardplayer/cardplayer.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';


@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectionGenericComponent

  ]
})
export class SharedModule { }
