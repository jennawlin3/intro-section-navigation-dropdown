const d = document;

// Desktop functionality
const featuresDesktop = d.querySelector("#features-desktop");
const submenuFeatures = d.querySelector("#collapsable-features");
const companyDesktop = d.querySelector("#company-desktop");
const submenuCompany = d.querySelector("#collapsable-company");


featuresDesktop.addEventListener("click", (e) => {
    if(e.target) {
        submenuFeatures.classList.toggle("hide");
    }
})

companyDesktop.addEventListener("click", (e) => {
    if(e.target) {
        submenuCompany.classList.toggle("hide");
    }
})

// Mobile functionality

const featuresMobile = d.querySelector("#features-mobile");
const submenuFeaturesMobile = d.querySelector("#collapsable-features_mobile");
const companyMobile = d.querySelector("#company-mobile");
const submenuCompanyMobile = d.querySelector("#collapsable-company_mobile");
const menuBtn = d.querySelector("#menu-mobile")
const menuMobile = d.querySelector("#collapsable-menu_mobile");
const closeMenuBtn = d.querySelector("#close-menu");
const container = d.querySelector(".container");
const maskBackground = d.querySelector(".mask");

console.log(submenuFeaturesMobile, featuresMobile)

menuBtn.addEventListener("click", (e) => {
    if(e.target) {
        menuMobile.classList.toggle("hide");
        menuBtn.classList.add("hide");
        maskBackground.classList.toggle("hide"); 
    }
});

closeMenuBtn.addEventListener("click", (e) => {
    if(e.target) {
        menuMobile.classList.toggle("hide");
        menuBtn.classList.remove("hide");
        maskBackground.classList.toggle("hide"); 
    }
})

companyMobile.addEventListener("click", (e) => {
    if(e.target) {
        submenuCompanyMobile.classList.toggle("hide");
    }
})

featuresMobile.addEventListener("click", (e) => {
    if(e.target) {
        submenuFeaturesMobile.classList.toggle("hide");
    }
})