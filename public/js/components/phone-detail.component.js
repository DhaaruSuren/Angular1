angular.module('phonecatApp').component('phoneDetail',
        {
        templateUrl: "templates/phone-detail-template.html",
        controller: function PhoneListController(){



          this.phones =[
            {
              name: 'Nexus S2',
              snippet: 'Fast just got faster with Nexus S.'
            }, {
              name: 'Motorola XOOM™ with Wi-Fi',
              snippet: 'The Next, Next Generation tablet.'
            }, {
              name: 'MOTOROLA XOOM™',
              snippet: 'The Next, Next Generation tablet.'
            }
                      ]
        }
      });
