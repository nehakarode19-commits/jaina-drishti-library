import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, FileText } from "lucide-react";

const AgamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Global Search for JAIN Agam & Scriptures
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">&lt;&lt; First</Button>
                <Button variant="outline" size="sm">&lt; Back</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">2</Button>
                <Button variant="outline" size="sm">4</Button>
                <Button variant="outline" size="sm">...</Button>
                <Button variant="outline" size="sm">120</Button>
                <Button variant="outline" size="sm">Next &gt;</Button>
                <Button variant="outline" size="sm">Last &gt;&gt;</Button>
              </div>
            </div>
          </div>

          <Card className="p-8 mb-6">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Aavashyakasutra (1118558)</h2>
                <p className="text-xl text-muted-foreground">आवश्यक सूत्र</p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-green-600 hover:bg-green-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Mool File Details
                  <Download className="h-4 w-4 ml-2" />
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Anuvad File Details
                  <Download className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-8">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Mool Language</p>
                <p className="text-base font-medium">Ardha-Magadhi</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Language</p>
                <p className="text-base font-medium">Gujarati</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Gatha or Sutra</p>
                <p className="text-base font-medium">Sutra</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Sutra Number</p>
                <p className="text-base font-medium">58</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Chapter</p>
                <p className="text-base font-medium">आचरंग - 4 प्रतिक्रमण</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Chapter</p>
                <p className="text-base font-medium">આચરંગ - 4 પ્રતિક્રમણ</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Section</p>
                <p className="text-base font-medium">आचरंग - 4 प्रतिक्रमण</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Section</p>
                <p className="text-base font-medium">આચરંગ - 4 પ્રતિક્રમણ</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Category</p>
                <p className="text-base font-medium">Mool-01</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Sutra Anuyog</p>
                <p className="text-base font-medium">Sutra Anuyog</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Author</p>
                <p className="text-base font-medium">Deepsagsagar</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Original Author</p>
                <p className="text-base font-medium">Gandhar</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Century</p>
                <p className="text-base font-medium">Svetambarai</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Source</p>
                <p className="text-base font-medium">Source</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Sect</p>
                <p className="text-base font-medium">Svetambarat</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Mool Sutra</h3>
                  <Button variant="link" className="text-primary">
                    See Translation <FileText className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <p className="text-base leading-relaxed">
                    [क्यों] इं छम्मा कउलस्स पीणतेणं मोहिय मेहिणो अणंतेणं व्वकंति णहि – अविहिण्णे करुम। ऐं तम्ह किं रुग्वालं वेदो तो रात्रे से चत्वाः पुरुष करुवे विधवे से चत्वायो इति प्रपचोवे जैसे राख वे दर से पुत्तयो मत् । त्वे तम्ह व किं रूपाणो वे त व सी शुधीयो अवे तेजो फुप्पलस्सो विविधो पुपग्छावलास्सिवे णदी त्वलायणे णे कंति भूखती ज विविधणवगाणणयीह वंस अव्वकंति दे अगलत्तयी दय णई साणीणयी चलेव्व विधो पुसरखय इति विसर्गोति तायो बे स्राय प्लुधेयन्ते णं कत्वाले पुन्णविय, वलासो धर्ती णे टी मेण इं वे त स्यो त्रुम्पीत इंतो तणो वदेशों भाविय लितीये । [रो छलाव्णी प्रवर्ति व केखो तो तते अस्व वदेशे कोई मय - पेपती तो - भवती तो - अदेशी तो - विधित्सो तो - मित्सती तो - आतपो वे भूत्वा दी ज्वलती तो पत्तात्स्व – पेदमाक्षो व चगुंस् वे व काश तो चालति मे णेप्रधे दर तो अणाचार्य तो स्वास्थ्य इदि ते व त्रयी र्व्या ण पतीयत सोवेप ज्वंल व द्वालबो ते ण्विय इंदो दसन्तो पुरोवलोवृच्चो दुच्चरे त्यस्तु नूणस्सो ण मिग्गत्ते इ सूबंधाः से ट्व ष जात्त्विल इति दी त्यंब्यी गोड़े दिणीय णे॥ वोसुग्गेववट्वास्तो मचाट्वेषस्य ण मग्यस्ति त्वो दीरेणो डे त मराल तड्यते णं त मा साम्ब परेषें त विधो भूसो चमाणं मावो म्युविण णे थंक्तो व्याओ त्यो णं
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Sutra Meaning</h3>
                  <Button variant="link" className="text-primary">
                    See Translation <FileText className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border">
                  <p className="text-base leading-relaxed">
                    -रआ माँ की वे खाना बननए हैं, भोंधे में सबी हो जलवायु करता है , उदम् सम्मी प्र्यालस वेलो वर लती – प्रविहिण्ण करुम। एं तम्ह की नागस्तो है , तम् गाँश के भी सार्थीं (स्तुत्या) सर्वेष ते प्रतिल्व । ण्ट कडू ठीक घदार ते ठीस गीं पर लाड से को गाला करत्ते प्रेट्टी वे ते नू टै हुए प्राप्तो आत त्वे – वण्या सो वि – थाण्या तो – प्रोधिदु तो – विधीदो तो – मैला टीव्या णें प्रवण सो वे वहुद्यो त रते पतारत्स्व – प्रगमद्यो ण चोयतवेदी के भिविवी वदर व ज अण धालाद पूर्ण – विक्रय डय सो क्षर्तुणस्प सुर्वेमेणे संव्या त णसण त सरुण इति जोंत ते (तो महो कोयं) स्प्राख्यरेखक वाह्यालयोद्यो मो ण्व्य इदो प्रस्तात्ते राउराह्यो पूसक वे प्रसत्तातो सरापा त्व पो प्लायो ते यत्र महती व्यये आदो त मा पी दू ण पति अत्थ तो अव वेवी डी समा सरपेऋषभ गोष्ठ सुयाणे राउविण णे यणलटा त णै णं
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgamDetail;
