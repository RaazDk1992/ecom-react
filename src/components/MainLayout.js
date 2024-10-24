import EcomNavBar from "./EcomNavBar";

export default function MainLayout({children}){

    return(
       <div>
         <EcomNavBar/>
         <main>{children}</main>
       </div>

    );
}