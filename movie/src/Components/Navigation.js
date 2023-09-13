import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import tv from "../assets/tv.png";
import menu from "../assets/Menu.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="pt-6">
      <Container className=" mx-auto px-8 md:px-0 py-4 flex">
        <Navbar.Brand href="#" className="flex flex-none items-center">
          <img src={tv} alt="" className=" h-12 w-12" />
          <h1 className="ml-6 text-2xl font-bold text-white hidden lg:block">
            MovieBox
          </h1>
        </Navbar.Brand>
        <Form
          inline
          className=" px-3 mx-12 flex-1 xl:mx-56 rounded-md border-solid border-slate-300 border-2 items-center flex"
        >
          <InputGroup className=" flex w-full">
            <Form.Control
              placeholder="What do you want to watch?"
              aria-label="What do you want to watch?"
              aria-describedby="basic-addon1"
              className="w-4/5 outline-none bg-transparent"
            />
            <InputGroup.Text
              id="basic-addon1"
              className="w-1/5 justify-end flex"
            >
              <SearchRoundedIcon className="text-white" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <Navbar.Brand href="#" className="flex flex-none justify-end items-center">
          <h2 className="mr-8 text-md font-semibold text-white hidden lg:block">
            Sign in
          </h2>

          <img src={menu} alt="menu" className="h-10 w-10" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
