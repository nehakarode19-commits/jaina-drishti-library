import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Donate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Donate Us</h1>
            <p className="text-base text-foreground leading-relaxed max-w-4xl mx-auto">
              Jaina Education and Jain eLibrary website activities are non-commercial religious activities. They include 
              Pathashala Books (preparation and distribution), eLibrary Website, Scanning of books, Jain Workshops, 
              Jain Academic Bowl (JAB) competitions among youth and many more. They are totally funded through 
              contribution received from Jain community and others from all over the world. Please donate generously.
            </p>
          </div>

          {/* Donation Options */}
          <div className="space-y-6">
            {/* US Dollar via Credit Card or PayPal */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  US Dollar via Credit Card or PayPal – Tax deductible in USA
                </h3>
              </div>
              <Button
                onClick={() => navigate("/donate/form")}
                className="bg-[#8B7355] hover:bg-[#6B5D3F] text-white rounded-full px-8"
              >
                Donate Now
              </Button>
            </div>

            {/* US Dollar Pay via Zelle */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  US Dollar Pay via Zelle – Tax deductible in USA
                </h3>
                <p className="text-sm text-[#6B5D3F]">
                  Please use your online banking to pay by zelle ID.<br />
                  Please fill out the form so we can send you the receipt.
                </p>
              </div>
              <Button
                onClick={() => navigate("/donate/fill-form")}
                className="bg-[#8B7355] hover:bg-[#6B5D3F] text-white rounded-full px-8"
              >
                Fill Form
              </Button>
            </div>

            {/* US Dollar via Check or Bank Draft */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  US Dollar via Check or Bank Draft – Tax deductible in USA
                </h3>
                <div className="text-sm text-[#6B5D3F] space-y-1">
                  <p>Name on Check Payable to : Jain Education International</p>
                  <p>Federal Id: 95-3507826</p>
                  <p>825, Artesia, Blvd</p>
                  <p>Carson CA 90746-2303 USA</p>
                  <p>Phone : 310-822-4001 (U.S.A.), E-mail : jcfiusa@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* US Dollar via Online Bank Transfer */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  US Dollar via Online Bank Transfer from USA and Other Countries
                </h3>
                <p className="text-sm text-[#6B5D3F]">
                  Due to security reasons, we can not display bank details here. You are request to email us with your phone number. We will 
                  verify and share the bank details for you to make donation using wire transfer
                </p>
              </div>
            </div>

            {/* US Dollar via Zelle */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  US Dollar via Zelle
                </h3>
                <div className="text-sm text-[#6B5D3F] space-y-1">
                  <p>Email: treasurer@jainelibrary.org</p>
                  <p>Phone: 919-889-1900</p>
                </div>
              </div>
            </div>

            {/* India - Online Transfer */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  India – Online Transfer/NEFT/RTGS (within India) – Donation is Tax deductible in India
                </h3>
                <div className="text-sm text-[#6B5D3F] space-y-1">
                  <p>Account Name : Shree Gyanmandir Charitable Trust</p>
                  <p>Bank : ICICI Bank</p>
                  <p>Branch : Ahmedabad Ashram Road (Stadium Circle) Branch</p>
                  <p>Branch Address : 21, Popular House, Ashram Road, AHMEDABAD 380009</p>
                  <p>Account Number : 006301004511</p>
                  <p>IFSC Code : ICIC0000189</p>
                </div>
              </div>
              <Button
                onClick={() => navigate("/donate/form")}
                className="bg-[#8B7355] hover:bg-[#6B5D3F] text-white rounded-full px-8"
              >
                Donate Now
              </Button>
            </div>

            {/* India - Check/Cheque or Bank Draft */}
            <div className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 flex items-start gap-4">
              <div className="bg-[#8B7355] rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#4A4129] mb-2">
                  India – Check / Cheque or Bank Draft (Indian Rupees Only) – Donation is Tax deductible in India
                </h3>
                <div className="text-sm text-[#6B5D3F] space-y-1">
                  <p>Name on Check or Draft : Shree Gyanmandir Charitable Trust</p>
                  <p>C/o Arihant Graphics (Sudesh Shah)</p>
                  <p>21, Popular House, Ashram Road, Ramnagar, Sabarmati</p>
                  <p>Ahmedabad – 380005 (Gujarat) India</p>
                  <p>Telephone +91 99988 90335 (India), E-mail : arihant.graft@gmail.com</p>
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

export default Donate;
