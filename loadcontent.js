const ID = '1J3z40PASgxpbZCKsxsafNTxZWaD66vRltrEt2Zrak_U'
fetchSheet
  .fetch({
    gSheetId: ID,
    wSheetName: "img",
  })
  .then((rows) => {
    document.querySelector('.logo_big').src = rows[0].row1
    document.querySelector('.logo_small').src = rows[1].row1
  });

fetchSheet
  .fetch({
    gSheetId: ID,
    wSheetName: "nav",
  })
  .then((rows) => {
    let navlg = ''
    rows.forEach((row) => {
      if (row.id == 'nav') {
        navlg += `
        <li style="display: block !important">
          <a href="${row.row2}">${row.row1}</a>
        </li>`
      }
    })
    document.querySelector('#navlgvamnaone').innerHTML = navlg
  });

fetchSheet
  .fetch({
    gSheetId: ID,
    wSheetName: "content",
  })
  .then((rows) => {
    let introcontent = ''
    let content3 = ''
    let chungnhan = ''
    let doitac = ''
    let baochi = ''
    rows.forEach((row) => {
      if (row.id == 'intro') {
        introcontent = `
        <h2 class="title_banner">${row.row1}</h2>
        <p class="description_banner">${row.row2}</p>`
        /* <a href="/vung-nguyen-lieu-va-nha-xuong" class="btn_banner">Tìm hiểu thêm
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.1323 8.875C13.1323 10.1377 14.9441 12.4985 16.7559 12.4985C15.4955 12.4985 13.1323 14.0838 13.1323 16.122"
              stroke="#0A6836" stroke-width="1.2381" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M7.24377 12.5H15.8496" stroke="#0A6836" stroke-width="1.2381"
            stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a> */ 
      }
      if (row.id == 'video') {
        document.querySelector('#videotitle').innerText = row.row1
        document.querySelector('.videocontent').innerText = row.row2
        document.querySelector('#videosrc').src = row.row3
        document.querySelector('.elementor-custom-embed-image-overlay').setAttribute('style','background-image: url(' + row.row4 + ')')
      }
      if (row.id == 'content1') {
        document.querySelector('#heading-buffalo').innerText = row.row1
        document.querySelector('#content-buffalo').innerText = row.row2
      }
      if (row.id == 'content2') {
        document.querySelector('#heading-process').innerText = row.row1
        document.querySelector('#content-process').innerText = row.row2
      }
      if (row.id == 'content3') {
        document.querySelector('#heading_product_home').innerText = row.row1
        document.querySelector('#content_product_banner').innerText = row.row2
      }
      if (row.id == 'sanpham') {
        content3 += `
        <div>
          <div class="item_card_product">
            <a href="${row.row2}" class="box_img"><img decoding="async"
            src="https://hanuti.vn/wp-content/uploads/2023/11/snapedit_1700653757636.png" /></a>
            <a class="title" href="${row.row2}">
              <h2>${row.row1}</h2>
            </a>
          </div>
        </div>
        `
      }
      if(row.id == 'chungnhan'){
        chungnhan += `
        <div class="swiper-slide">
                                                <div class="elementor-testimonial elementor-repeater-item-341349a">
                                                    <div class="elementor-testimonial__header">
                                                        <div class="elementor-testimonial__image">
                                                            <img decoding="async"
                                                                src="${row.row2}"
                                                                alt="">
                                                        </div>
                                                        <div
                                                            class="elementor-testimonial__icon elementor-icon elementor-icon-">
                                                            <span class="elementor-screen-only">Read More</span>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-testimonial__content">
                                                        <div class="elementor-testimonial__text">
                                                            ${row.row1} </div>
                                                    </div>
                                                </div>
                                            </div>`
      }
      if(row.id == 'tuhao'){
        document.querySelector('#tuhaotitle').innerText = row.row1
        document.querySelector('#tuhaocon').innerText = row.row2
      }
      if(row.id == 'doitac'){
        doitac += `
        <div class="swiper-slide">
                                                <div class="elementor-testimonial">
                                                    <div class="elementor-testimonial__footer">
                                                        <div class="elementor-testimonial__image">
                                                            <img decoding="async"
                                                                src="${row.row1}"
                                                                alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
      }
      if(row.id == 'baochit'){
        document.querySelector('#baochit').innerText = row.row1
        document.querySelector('#baochic').innerText = row.row2
        document.querySelector('#baochii').src = row.row3
        
      }
      if(row.id == 'baochi'){
        baochi += `
        <div class="jet-listing-grid__item jet-listing-dynamic-post-190"
                                                    data-post-id="190">
                                                    <div data-elementor-type="jet-listing-items" data-elementor-id="220"
                                                        class="elementor elementor-220"
                                                        data-elementor-post-type="jet-engine">
                                                        <div class="elementor-element elementor-element-505eb4a e-con-full e-flex e-con e-parent"
                                                            data-id="505eb4a" data-element_type="container"
                                                            data-settings="{&quot;content_width&quot;:&quot;full&quot;}"
                                                            data-core-v316-plus="true">
                                                            <div class="elementor-element elementor-element-3589b22 elementor-widget elementor-widget-image"
                                                                data-id="3589b22" data-element_type="widget"
                                                                data-widget_type="image.default">
                                                                <div class="elementor-widget-container">
                                                                    <a
                                                                        href="${row.row3}">
                                                                        <img loading="lazy" decoding="async" width="655"
                                                                            height="490"
                                                                            src="${row.row1}"
                                                                            class="attachment-full size-full wp-image-2840"
                                                                            alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-8c9e402 e-con-full e-flex e-con e-child"
                                                                data-id="8c9e402" data-element_type="container"
                                                                data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                                                <div class="elementor-element elementor-element-5f42ece elementor-widget elementor-widget-heading"
                                                                    data-id="5f42ece" data-element_type="widget"
                                                                    data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2
                                                                            class="elementor-heading-title elementor-size-default">
                                                                            <a
                                                                                href="${row.row3}">Liên
                                                                                ${row.row2}</a>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-34b2983 elementor-widget elementor-widget-heading"
                                                                    data-id="34b2983" data-element_type="widget"
                                                                    data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <p${row.row4}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-f6cf1be elementor-widget elementor-widget-button"
                                                                    data-id="f6cf1be" data-element_type="widget"
                                                                    data-widget_type="button.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-button-wrapper">
                                                                            <a class="elementor-button elementor-button-link elementor-size-sm"
                                                                                href="${row.row3}">
                                                                                <span
                                                                                    class="elementor-button-content-wrapper">
                                                                                    <span
                                                                                        class="elementor-button-icon elementor-align-icon-right">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="24" height="25"
                                                                                            viewBox="0 0 24 25"
                                                                                            fill="none">
                                                                                            <path
                                                                                                d="M14.0476 7.54688C14.0476 9.2727 16.5238 12.4993 19 12.4993C17.2774 12.4993 14.0476 14.6659 14.0476 17.4516"
                                                                                                stroke="#0A6836"
                                                                                                stroke-width="1.2381"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round">
                                                                                            </path>
                                                                                            <path
                                                                                                d="M5.99981 12.5H17.7617"
                                                                                                stroke="#0A6836"
                                                                                                stroke-width="1.2381"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round">
                                                                                            </path>
                                                                                        </svg> </span>
                                                                                    <span
                                                                                        class="elementor-button-text">Chi
                                                                                        tiết</span>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        `
      }
    })
    document.querySelector('#slick_product_home').innerHTML = content3
    jQuery("#slick_product_home").slick({
      centerMode: true,
      slidesToShow: 3,
      infinite: true,
      prevArrow: jQuery("#product_home-prev"),
      nextArrow: jQuery("#product_home-next"),
      responsive: [{
          breakpoint: 1023,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 767,
          settings: {
              arrows: false,
              centerMode: false,
              variableWidth: true,
          },
      },
      ],
  });
    document.querySelector('#box-content-banner').innerHTML = introcontent
    document.querySelector('#chungnhan').innerHTML = chungnhan
    document.querySelector('#doitac').innerHTML = doitac

  });