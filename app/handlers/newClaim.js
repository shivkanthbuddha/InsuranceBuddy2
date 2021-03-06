module.exports = {
    /**************************CREATE CLAIM************************ */
    'SelectedClaimState': {
        'YesIntent': function () {
            let SelectedClaimState = this.t('DoYouNeedAnAmbulance');
            this.followUpState('NeedAmbulance').ask(SelectedClaimState);
        },
        'NoIntent': function () {

            let SelectedClaimState = this.speechBuilder()
                .addBreak('400ms').addT('GladYouAreOk')
                .addBreak('400ms').addT('MrShiv')
                .addBreak('400ms').addT('pinPointingYourCar')
                .addBreak('400ms').addT('InformedPoliceAndSendingDrone')
                .addBreak('400ms').addT('PhotosSentHelpInvestigation')
                 .addAudio("https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Drone2.mp3")
                .addBreak('400ms').addT('DroneArrived')
                .addBreak('400ms').addT('droneTakePictures')
                .addBreak('400ms').addT('canWeTakePictures')

            this.followUpState('DroneArrived')
                .showImageCard(this.t('cardTitle'), this.t('pinPointingYourCar'), 'https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/3.+giphy-4.gif')
                .ask(SelectedClaimState, this.t('boolReprompt'));
        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            this.followUpState('SelectedClaimState')
                .ask(this.t('boolPrompt'), this.t('boolReprompt'));
        },
    },

    'NeedAmbulance': {
        'YesIntent': function () {

            let NeedAmbulance = this.speechBuilder()
                .addBreak('400ms').addT('BookedAmbulance')
                .addBreak('400ms').addT('AmbulanceCarOntheWaay')

            this.tell(NeedAmbulance, this.t('boolReprompt'));

        },
        'NoIntent': function () {
            this.toStateIntent('SelectedClaimState', 'NoIntent');
        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            this.followUpState('NeedAmbulance')
                .ask(this.t('boolPrompt'), this.t('boolReprompt'));
        },
    },

    'DroneArrived': {
        'YesIntent': function () {

            let droneArrived = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/CameraClick1.mp3')
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/CameraClick1.mp3')
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/CameraClick1.mp3')
                //.addBreak('400ms')
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Process1.mp3')
                //.addBreak('400ms')
                .addBreak('400ms').addT('recievedPhotosFromDrone')
                .addBreak('400ms').addT('assessedSituation')
                .addBreak('400ms').addT('canWeBookTowTruck')


            this.followUpState('CallForTowTruck')
                .showImageCard(this.t('cardTitle'), this.t('BookingTowTruck'), 'https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/4.+Car-Tow-Truck-56137.gif')
                .ask(droneArrived, this.t('boolReprompt'));

        },
        'NoIntent': function () {

            let droneArrived = this.speechBuilder()
                .addBreak('400ms').addT('ok')
                .addBreak('400ms').addT('SendingPerson')
                .addBreak('400ms').addT('takeFewMinutes')


            this.tell(droneArrived, this.t('boolReprompt'));

        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            this.followUpState('DroneArrived')
                .ask(this.t('boolPrompt'), this.t('boolReprompt'));
        },
    },


    'CallForTowTruck': {
        'YesIntent': function () {

            let CallForTowTruck = this.speechBuilder()
                .addBreak('400ms').addT('bookingaTowTruck')
                .addBreak('400ms').addT('bookingUber')
                .addBreak('400ms').addT('dontWorryAbouttheCar')
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/UberCar1.mp3')
                .addBreak('400ms').addT('yourTowTruckArrived')
                .addBreak('400ms').addT('dontForgetCarKeys')
                .addBreak('400ms').addT('canWeProceed')

            this.followUpState('UberArrived')
                .showImageCard(this.t('cardTitle'), this.t('yourTowTruckArrived'), 'https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/5.1+tow-truck-logo-26.gif')
                .ask(CallForTowTruck, this.t('boolReprompt'));

        },
        'NoIntent': function () {

            let CallForTowTruck = this.speechBuilder()
                .addBreak('400ms').addT('ok')
                .addBreak('400ms').addT('SendingPerson')
                .addBreak('400ms').addT('takeFewMinutes')
                .addBreak('400ms').addT('bookingUber')
                .addBreak('400ms').addT('canWeProceed')

            this.followUpState('UberArrived').tell(CallForTowTruck, this.t('boolReprompt'));

        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            this.followUpState('CallForTowTruck')
                .ask(this.t('boolPrompt'), this.t('boolReprompt'));
        },
    },

    'UberArrived': {
        'YesIntent': function () {

            let UberArrived = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/UberCar1.mp3')
                .addBreak('400ms').addT('uberHasArrived')
                .addBreak('400ms').addT('PleaseProceed')
                //.addBreak('3000ms')
                .addBreak('400ms').addT('didYouGetIntoTheCar')

            this
                .showImageCard(this.t('cardTitle'), this.t('uberHasArrived'), 'https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/6.+download.jpg')
                .followUpState('ClaimThanks').ask(UberArrived, this.t('boolReprompt'));

        },
        'NoIntent': function () {

            this.toStateIntent('ClaimThanks', 'YesIntent');

        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            this.followUpState('UberArrived')
                .ask(this.t('boolPrompt'), this.t('boolReprompt'));
        },
    },

    'ClaimThanks': {
        'YesIntent': function () {

            let ClaimThanks = this.speechBuilder()
                .addBreak('400ms').addT('sentClaimDetailstoEmail')
                .addBreak('400ms').addT('keepPostedOnCar')
                .addBreak('400ms').addT('keepPostedOnClaim')
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')

            this
                .showImageCard(this.t('cardTitle'), this.t('BigThankYou'), 'https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/7+download.jpg')
                .tell(ClaimThanks, this.t('boolReprompt'));

        },
        'NoIntent': function () {

            let ClaimThanks = this.speechBuilder()
                .addBreak('400ms').addT('ok')
                .addBreak('400ms').addT('getIntoTheCar')
                .addBreak('400ms').addT('didYouGetIntoTheCar')

            this.followUpState('ClaimThanks').tell(ClaimThanks, this.t('boolReprompt'));

        },
        'RepeatIntent': function ()  {
            this.repeat();
        },
        'CancelIntent': function () {
            let speech = this.speechBuilder()
                 .addAudio('https://insurance-buddy-2.s3.ap-south-1.amazonaws.com/Intro.mp3')
                //.addT(str)
                .addBreak('400ms').addT('ThankYouFromInsuranceBuddy')
            this.tell(speech, speech);
        },
    
        'Unhandled': function () {
            if (glbPolicyNo == null) {
                this
                    .ask(this.speechBuilder().addT('errorMsg').addT('welcomeMsg2'), this.speechBuilder().addT('errorMsg').addT('welcomeMsg2'));
            } else if (glbPolicyNo != null) {
                this
                    .ask(this.speechBuilder().addT('errorMsg').addT('PolicyWelcomeP2'), this.speechBuilder().addT('errorMsg').addT('PolicyWelcomeP2'));
            } else {
                this
                    .ask(this.speechBuilder().addT('errorMsg').addT('PolicyWelcomeP2'), this.speechBuilder().addT('errorMsg').addT('PolicyWelcomeP2'));

            }
        },


    },
};