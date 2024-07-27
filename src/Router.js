import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Genre } from "./pages/genre/Genre";
import { Person } from "./pages/person/Person";
import { Company } from "./pages/company/Company";
import { Preview } from "./pages/preview/Preview";
import { Search } from "./pages/search/Search";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.genre} element={<Genre />} />
        <Route path={routes.person} element={<Person />} />
        <Route path={routes.company} element={<Company />} />
        <Route path={routes.preview} element={<Preview />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.signin} element={<SignIn />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

//한개의 페이지를 만들어서 여러군데에서 왔다갔다 연결지어서 쓰고 싶으면 페이지를 만들어서 루트로 연결해줘야함
//컴포넌트 정리하는 법
// =>안에 내용이 많거나 섹션이 여러개 나올것같은 페이지는 폴더를 만들어서 컴포넌츠폴더와 대표컴포넌트(페이지)를 분리해서 사용.
// 대표컴포넌트(페이지)에서 컴포넌츠폴더안의 내용을 따로 불러 와서 사용할수있게.
