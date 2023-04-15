import Categories from "./components/category/Categories";
import Featured from "./components/featured/Feature";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LatestBlog from "./components/latest-blog/LatestBlog";
import Navigation from "./components/navigation/Navigation";
import PlacesToVisit from "./components/places-to-visit/PlacesToVisit";

function App() {
    return (
        <div>
            <Navigation />
            <Home />
            <Categories />
            <Featured />
            <LatestBlog />
            <PlacesToVisit />
            <Footer />
        </div>
    );
}

export default App;
