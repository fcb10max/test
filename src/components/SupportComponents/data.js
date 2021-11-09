import {
  faAndroid,
  faApple,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dataArr = [
  {
    title: "Mac",
    icon: <FontAwesomeIcon icon={faDesktop} />,
    content: [
      {
        title: "Payments/Subscription",
        links: [
          {
            title: "How do I restore my purchase I made from the App Store?",
          },
          {
            title: "What do I need to do to get a refund from Apple?",
          },
          {
            title:
              "How do I cancel in the App Store when I am using my Mac device?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Profile/Installation",
        links: [
          {
            title: "How do I sign into UltraVPN on my Mac device?",
          },
          {
            title: "How do I reinstall the VPN profile on Mac?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Can't access web/app",
        links: [
          {
            title:
              "Why is my speed slow on my Mac device and how do I fix this?",
          },
          {
            title: "Why am I unable to watch BBC iPlayer on my Mac device?",
          },
          {
            title: "Why can't I access Netflix on my Mac device?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Can't connect",
        links: [
          {
            title:
              "Why can't I connect to a Virtual Location on my Mac device?",
          },
          {
            title:
              "UltraVPN is not connecting on my Mac device. What can I do?",
          },
        ], //links arr
      }, //content obj
    ], //content arr
  }, //dataArr obj
  {
    title: "Windows",
    icon: <FontAwesomeIcon icon={faWindows} />,
    content: [
      {
        title: "Can't access web/app",
        links: [
          {
            title:
              "My VPN is slow on my Windows device. What is the best way to test my internet speed?",
          },
          {
            title:
              "I am unable to watch Hulu while using UltraVPN. What can I do to fix this?",
          },
          {
            title: "Why can't I watch Netflix on my Windows device?",
          },
          {
            title: "Why can't I access Netflix on my Mac device?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Getting Started",
        links: [
          {
            title: "How do I change my server location?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Profile/Installation",
        links: [
          {
            title: "How do I sign into UltraVPN on Windows?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Can't connect",
        links: [
          {
            title: "Why can't I connect from my country?",
          },
          {
            title: "Why can't I connect to UltraVPN on Windows?",
          },
        ], //links arr
      }, //content obj
    ], //content arr
  }, //macobj
  {
    title: "Android",
    icon: <FontAwesomeIcon icon={faAndroid} />,
    content: [
      {
        title: "Can't access web/app",
        links: [
          {
            title: "Why am I unable to access Netflix on my Android device?",
          },
          {
            title: "Why is my speed slow when I'm connected?",
          },
          {
            title:
              "I cannot access any websites or apps while UltraVPN is on. Is there anything I can do to fix this?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Installation",
        links: [
          {
            title: "How do I grant permissions for UltraVPN?",
          },
          {
            title: "How do I uninstall UltraVPN on Android?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Account/Devices",
        links: [
          {
            title: "How do I sign in to UltraVPN on Android?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Can't connect",
        links: [
          {
            title:
              "I am unable to connect to UltraVPN. Is there anything I can do to fix this?",
          },
        ], //links arr
      }, //content obj
    ], //content arr
  }, //macobj
  {
    title: "iOS",
    icon: <FontAwesomeIcon icon={faApple} />,
    content: [
      {
        title: "Can't connect",
        links: [
          {
            title: "Why can't I connect to the Internet when VPN is on?",
          },
          {
            title: "Why can't I connect to WiFi on iOS?",
          },
          {
            title: "Why does the VPN icon disappear on my iOS device?",
          },
          {
            title:
              "Why can't I disconnect UltraVPN on my iOS device from the iPhone settings?",
          },
          {
            title:
              "UltraVPN is not connecting on my iOS device. What can I do?",
          },
        ], //links arr
      }, //content obj
      {
        title: "iOS Subscriptions",
        links: [
          {
            title: "How do I restore a purchase I made from the App Store?",
          },
          {
            title:
              "How do I cancel a subscription purchased through the App Store?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Account/Devices",
        links: [
          {
            title: "How do I request a refund through Apple?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Profile/Installation",
        links: [
          {
            title: "How do I sign into UltraVPN on iOS?",
          },
          {
            title: "How do I reinstall my profile on iOS?",
          },
          {
            title: "How do I uninstall UltraVPN?",
          },
        ], //links arr
      }, //content obj
      {
        title: "Can't access web/app",
        links: [
          {
            title: "How to turn off location services on iOS?",
          },
          {
            title:
              "I am trying to watch BBC iPlayer on my iOS device but I am unable to stream it. Is there anything I can do to fix this?",
          },
          {
            title: "Why can't I access Hulu on iOS?",
          },
          {
            title: "Why can't I access Netflix on iOS?",
          },
          {
            title:
              "Why am I unable to access content from another app or from a website?",
          },
        ], //links arr
      }, //content obj
    ], //content arr
  }, //macobj
  {
    title: "General",
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
    content: [
      {
        title: "General Information",
        links: [
          {
            title: "How do I cancel my subscription from my Ultra VPN account?",
          },
          {
            title: "How do I sign in to UltraVPN? (Windows, Mac, Android, iOS)",
          },
          {
            title: "How do I take a screenshot?",
          },
          {
            title: "Where to contact us?",
          },
          {
            title: "What server or city should I choose?",
          },
          {
            title: "How do I clear my mobile devices data and cache?",
          },
          {
            title: "How do I clear my browsers cookies?",
          },
          {
            title: "How do I take a screenshot?",
          },
          {
            title: "What are UltraVPN's compatible platforms?",
          },
          {
            title: "What is the best way to test my Internet Speed?",
          },
          {
            title: "How do I cancel my subscription on Google Play?",
          },
          {
            title: "Is there any battery drain while using UltraVPN?",
          },
        ], //links arr
      }, //content obj
    ], //content arr
  }, //macobj
]; //datArr arr

export default dataArr;
