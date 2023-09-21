import { H1, H2, Slide } from "@gregcello/revealjs-react";
import { Grid } from "@mui/material";

const Title: React.FC = () => {
    return (<>
        <Slide autoAnimate>
            <Grid container spacing={0} className="justify-col" sx={{height: '100vh'}}>
                <Grid item xs={12} className="justify-row">
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '150px'}} />
                    <span />
                </Grid>
                <Grid item xs={12}>
                    <H1>
                        From <span className="fragment highlight-current-red">method development</span> to <span className="fragment highlight-current-red">software integration</span>: A comprehensive approach to <span className="fragment highlight-red">geostatistical</span> uncertainty
                    </H1>
                    <H2 style={{marginTop: '8rem'}}>PhD Defense by Mirko Mälicke</H2>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>

            <aside className="notes">
              <p>Welcome to my PhD defense presentation, titled 'From method development to software integration: A comprehensive approach to geostatistical uncertainty.' For the next 30 minutes, let me take you on a journey</p>
              <p> about new exciting methods ...</p>
              <p>and sophisticated software solutions,</p>
              <p>all based in the field of geostatistics. Why geostatistics? Is it still relevant in times of Big Data and AI?</p>
            </aside>
        </Slide>

    </>)
}

export default Title;