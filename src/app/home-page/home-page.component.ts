import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      const $videoSrc = $('#video').attr('src');
      $('#myModal').on('hide.bs.modal', function () {
        $('#video').attr('src', $videoSrc);
      });
    });
  }

}
