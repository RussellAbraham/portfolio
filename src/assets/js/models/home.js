define(['backbone'], function (Backbone) {

  var HomeModel = Backbone.Model.extend({
    defaults: {
      title: "Welcome to My Profile",
      description: "As a passionate fullstack web developer, I thrive on the challenge of connecting diverse systems and creating seamless middleware solutions. My enthusiasm for technology and coding fuels my dedication to building integrated, efficient digital experiences. With a strong foundation in SEO and marketing, I uniquely position myself to enhance both the functionality and visibility of the applications I develop. I specialize in leveraging the Model-View-Controller architecture and enjoy working with tools and frameworks such as Backbone.js, Bootstrap, and Express.js. My goal is to continually expand my skill set, ultimately aspiring to take on a senior role where I can lead complex projects and guide emerging developers. Staying ahead of industry trends is a priority for me. I actively engage with a variety of online resources and professional networks to ensure I am always equipped with the latest knowledge and techniques. This proactive approach allows me to deliver cutting-edge solutions that effectively bridge the gap between technology and business strategy."
    }
  });

  return HomeModel;

});
