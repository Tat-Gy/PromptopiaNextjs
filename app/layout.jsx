import '@styles/globals.css';
import { Children } from 'react'; 
export const metadata = {
    title: "promptopia",
    description: 'Discover and share AI Prompts',
};


const Rootlayout = ( {Children } ) => {
  return (
    
    <html>
        <body>
            <div className="main">
                <div className="ghradient"/>

                <main className="app">
                    {Children } 

                </main>

            </div>
        </body>
    </html>
  )
};
 

export default Rootlayout; 