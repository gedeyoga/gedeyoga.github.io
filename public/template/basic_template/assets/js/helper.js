function loading(show = true , className = ''){
    if(show){
        let html = `
            <div class="placeholder-loading">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-picture" style="height: 240px;"></div>
                        <div class="ph-row" style="margin-top: 40px;">
                            <div class="ph-col-6 big" ></div>
                            <div class="ph-col-6 empty big"></div>
                            <div class="ph-col-2 big"></div>
                            <div class="ph-col-10 empty"></div>
                            <div class="ph-col-12 big" style="margin-top: 70px;"></div>
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-4 empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $(className).append(html);
    }else{
        $(className).find('.placeholder-loading').remove();
    }
}