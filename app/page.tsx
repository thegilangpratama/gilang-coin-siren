import Content from "@/components/molecules/content/page";
import Footer from "@/components/molecules/footer/page";
import Navbar from "@/components/molecules/navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Content className="text-white font-semibold">
        <Navbar />
      </Content>
      <Footer />
    </div>
  );
}
