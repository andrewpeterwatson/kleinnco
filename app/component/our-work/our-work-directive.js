'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    template: require('./_our-work.html'),
    controller: [OurWorkController],
    controllerAs: 'ourWorkCtrl',
    bindToController: true,
    scope: {}
  };

  function OurWorkController() {

    // const clientInfo = require('json!../../data/our-work-data.json');

    const clientInfo = [
      {
      "name":  "Novartis Diagnostics",
      "work": "Novartis hired us to create the sales materials for a global product launch. In less than 6 weeks, we developed & produced a highly segmented positioning & messaging matrix and all of the sales collateral required to support the launch….all while learning about and working within the legal restrictions of the medical diagnostics industry.",
      "logo": "/#/home/assets/logos/novartis-black.png"
      },

      {
        "name": "Microsoft",
        "work": "The CVP of the Microsoft Advertising & Online division needed help managing internal events. Klein & Co turned a typical quarterly all-hands meeting into an engaging & interactive talk-show style event: A&O Live. Taped in studio and produced like a TV show, A&O Live changed the way the global team engaged with leadership and contributed to the organization.",
        "logo": "microsoft-black"
      },
      {
        "name": "Oakland Unified School District",
        "work": "We were hired to author & design the first Annual Report for the 3 rd largest public school district in California – the challenge was no one had access to the brand assets - so in parallel to developing the report, we rebranded the district’s visual identity: logo, palette, photography.",
        "logo": "ousd-black"
      },
      {
        "name": "Neos-SDI",
        "work": "A European-based technical consulting company, Neos-SDI hired Klein & Co to position them within - and develop marketing assets for - the U.S. market. In under two months we researched, drafted & tested positioning while translating their entire website from French to English.",
        "logo": "neos-sdi-black"
      },
      {
        "name": "The Bill & Melinda Gates Foundation",
        "work": "Internal technology advisors hired Klein & Co to help build, nurture & manage a community of executive-level, external technologists who would volunteer their expertise to the Foundation. As networking & community-building specialists, we helped recruit & engage hundreds of global leaders in a breadth of technology segments to support the work of program officers within the foundation.",
        "logo": "gates-black"
      }
    ]




    this.currentClient = clientInfo;

    this.currentIndex = 0;
    this.showWorkGallery = false;




    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };

    this.showWorkGalleryAt = function(idx) {
      this.currentIndex = idx;
      this.showWorkGallery = true;
    };


    this.prevSlide = function() {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.currentClient.length - 1;
    };
    this.nextSlide = function() {
      this.currentIndex = (this.currentIndex < this.currentClient.length - 1) ? ++this.currentIndex : 0;
    };
  }
}
);
