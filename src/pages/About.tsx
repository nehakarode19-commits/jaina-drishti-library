import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-background to-muted/20 py-16 px-4">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12">About us</h1>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-foreground leading-relaxed mb-6">
                  To promote, preserve, print documents like ancient and contemporary Jain literature, Shree Gyansundarkar Charitable Trust in association with the Jain Education International organization - USA, has started a network called Jain eLibrary.org on the internet. Under which there are thousands of rare Jain texts and magazines, dictionaries, Agams, commentaries electronically into eBooks (pdf) or other harmonized files) or other electronic media and made available on the website to the common people for easy study research, etc. on religion and various topics. It also describes the life history of the Jain Acharya, the Jain monks.
                </p>
                <p className="text-foreground leading-relaxed">
                  The eLibrary comprises of a vast collection of literature on Jain principles, such as ahimsa, compassion, karma philosophy, and various forms of prayer. It serves as a comprehensive resource for individuals interested in studying Jainism and the life stories of Jain monks and their travels.
                </p>
              </div>

              <div className="bg-primary text-white rounded-lg p-8">
                <p className="leading-relaxed">
                  The Jain eLibrary website is an online collection of Jain scriptures, Jain commentaries, Jain dictionary, Jain encyclopedias, Jain articles, Jain magazines, and research and contemporary Jain books in English, Hindi, Gujarati, and other regional languages that anyone can read and download. Some literature is also available in Prakrit and Sanskrit as well as in a transliteration format. It has proven to be a valuable resource for Jainism scholars and religious enthusiasts worldwide. This site is totally free to use. The user can search for any book or any other type of interest and enjoy. Catalogues of Jain manuscripts of various Jain libraries add to the diversity of this collection.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-foreground leading-relaxed mb-6">
                  While the website contains this richness and spirituality of our ancient Jain literature it also helps the young generation understand the ideals and principles of Jain philosophy, culture, compassion, coexistence, and generosity. Moreover, this repository features Jain religious literature, we have disabled the permission from the authority/publishers for individual books added for download. We ensure to secure the right to have the website containing copyrighted material for public use. This website including Indian Jain copyrights.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  We suggest that if you violate any statutory or your or copy, right material, groove within us of you/think the benefit of we would like to be removed. Mail your letter in the following address. Please tell me send pdf as e-mail because many (If you are overseas) cannot write an email in India (available languages), so someone will contact you immediately. Please provide mail as soon as we notice your letter or the following address, a land-case, we apologize for any inconvenience your country has done. As a supporting organization we have confirmed other principles of our administration throughout we try to notify the commendably unfortunately.
                </p>
                <p className="text-foreground leading-relaxed">
                  The website is freely accessed at point and the registered users can freely download any material. No commercialized web portal institution is the greatest public. It promotes the nation projects in financial enough online contribution from the Jain communities of North America, India, and other parts of the world. None of the organizations and individuals named financially how to be impelled in from the website.
                </p>
              </div>

              <div className="bg-primary text-white rounded-lg p-8">
                <p className="leading-relaxed mb-4">
                  If you appreciate our work and would like to support the project, please reach out to us at:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Pravin K. Shah</p>
                  <p>Shree Paarashnath Jain Charitable Trust</p>
                  <p>519 North Randolph Street, Narayanpura, Ahmedabad – 380013 GUJARAT INDIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
