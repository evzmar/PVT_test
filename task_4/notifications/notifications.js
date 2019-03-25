//-------------------------------------------------//
//----        NotificationsComponent           ----//
//-------------------------------------------------//

// Specification:
// props = { notifications: ['text1', 'text2',...,'textn']}

let createNotificationsComponent = (props) => {

    //---


    //---




    let notificationsBlock = document.createElement('div');
    notificationsBlock.className = "notifications-block";

    //-----------

    let notificationsBlock__cSlides = document.createElement('div');
    notificationsBlock__cSlides.className = "notifications-block__c-slides";
    notificationsBlock.appendChild(notificationsBlock__cSlides);

    //-----------
    let  notificationsBlock__slidesRefs = [];
    for (let i = 0; i < props.notifications.length; i++) {
        let notificationsBlock__slide = document.createElement("div");
        notificationsBlock__slide.className = "notification-block__slide notification-block__slide--inactive";
        notificationsBlock__slide.innerHTML =
            `<div class="notification-block__slide-text"> 
                             ${props.notifications[i]}
                        </div>`;
        notificationsBlock__slidesRefs.push(notificationsBlock__slide);
        notificationsBlock__cSlides.appendChild(notificationsBlock__slide);
    }

    notificationsBlock__slidesRefs[0].classList.remove("notification-block__slide--inactive");

    //------------------------------------------------------------------

    let notificationsBlock__cDots = document.createElement("div");
    notificationsBlock__cDots.className = "notifications-block__c-dots";
    notificationsBlock.appendChild(notificationsBlock__cDots);

    //-----------
    let notificationsBlock__dotsRefs = [];

    for (let i = 0; i < props.notifications.length; i++) {

        let notificationsBlock__dot = document.createElement("span");
        notificationsBlock__dot.className = "notifications-block__dot";
        notificationsBlock__cDots.appendChild(notificationsBlock__dot);

        notificationsBlock__dotsRefs.push(notificationsBlock__dot);
    }

    //------------------------------------------------------------------

    let notificationsBlock__slidePrevBtn = document.createElement("div");
    notificationsBlock__slidePrevBtn.className = "notifications-block__slide-prev-btn notifications-block__slide-prev-btn--positioned";
    notificationsBlock__slidePrevBtn.innerHTML = '&#10094;';
    notificationsBlock.appendChild(notificationsBlock__slidePrevBtn);

    //------------------------------------------------------------------

    let notificationsBlock__slideNextBtn = document.createElement("div");
    notificationsBlock__slideNextBtn.className = "notifications-block__slide-next-btn notifications-block__slide-next-btn--positioned";
    notificationsBlock__slideNextBtn.innerHTML = '&#10095;';
    notificationsBlock.appendChild(notificationsBlock__slideNextBtn);

    //------------------------------------------------------------------

    let notificationsBlock__closeIcon = document.createElement("div");
    notificationsBlock__closeIcon.className = "notifications-block__close-icon";
    notificationsBlock.appendChild(notificationsBlock__closeIcon);


    notificationsBlock__closeIcon.addEventListener('click',
        ()=>{
            notificationsBlock.classList.add("notifications-block--inactive");
        });
    //------------------------------------------------------------------

    let notificationsBlock__notificationsOnOffBlock = document.createElement("div");
    notificationsBlock__notificationsOnOffBlock.className = "notifications-block__notifications-on-off-block";
    notificationsBlock.appendChild(notificationsBlock__notificationsOnOffBlock);

    //-----------

    let notificationsOnOffBlock__checkbox = document.createElement("input");
    notificationsOnOffBlock__checkbox.className = "notifications-on-off-block__checkbox";
    notificationsOnOffBlock__checkbox.type = "checkbox";
    notificationsBlock__notificationsOnOffBlock.appendChild(notificationsOnOffBlock__checkbox);

    //-----------

    let notificationsOnOffBlock__checkboxLabel = document.createElement("span");
    notificationsOnOffBlock__checkboxLabel.className = "notifications-on-off-block__checkbox-label";
    notificationsOnOffBlock__checkboxLabel.innerText = "Disable Tips";
    notificationsBlock__notificationsOnOffBlock.appendChild(notificationsOnOffBlock__checkboxLabel);

    //------------------------------------------------------------------

    return notificationsBlock;
};
//-------------------------------------------------//
