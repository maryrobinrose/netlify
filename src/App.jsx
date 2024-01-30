import './App.css'

function App() {

  return (
    <>
      <div>
      </div>
      <h1>Netlify Exercise</h1>
      <h2>Mary Robin Rose</h2>
      <ol>
        <li className="question">Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.</li>
          <p>
            I started up my site in the terminal with the use of Vite. It’s a super fast and lightweight build tool that utilizes npm for a quick setup. I included React because I’m familiar with that framework and could easily navigate it in this project. Vite provides a really simple way to incorporate this framework as well.
          </p>
          <p>
          One challenge I had was learning how to use Netlify to host this site since I had never used this service previous to this project. To overcome this, I watched several tutorial videos and read the documentation as well. It proved itself to be quite a seamless and fast experience.
          </p>

        <li className="question">What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.</li>
          <p>
          As mentioned in the above question, I found the Netlify setup experience to be surprisingly simple and quick. I was really impressed with it’s seamless github integration. I was easily able to connect Netlify to my github repo and see that my site was hosted within a matter of seconds. I also liked that I could very easily change the name of my site without having to dig around in a abyss of settings. 
          </p>

        <li className="question">Rank your 5 favorite and 5 least favorite activities from this list: <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" target="_blank">https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab</a></li>
          <p>
            Five favorite
          </p>
          <ul>
            <li>Create video tutorials to help teach users a specific feature or use case</li>
            <li>Join a Zoom call with a VIP customer you have been helping via email, upon their request</li>
            <li>Help train and onboard new support teammates</li>
            <li>Suggest and champion improvements to the Support team's workflow</li>
            <li>Work with the development team to help design a new feature based on feedback from customers</li>
          </ul>
          <p>Five least favorite</p>
            <ul>
              <li>Dig through server logs to troubleshoot a customer's website behavior</li>
              <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
              <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
              <li>Help manage communications during a service outage</li>
              <li>Set up your own copy of several site frameworks for debugging</li>
            </ul>
            <br></br>

        <li className="question">Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</li>
          <p>
          <a href="https://vitejs.dev/guide/" target="_blank">Here’s a link to Vite’s documentation.</a> This particular documentation is well done for several reasons. One is its visual simplicity. It’s important for user’s looking for clear information and instructions to not get overwhelmed by visual noise or design that’s too flashy. Vite has done a great job of keeping their docs simple and clean while also maintaining accessibility. Another great feature to their documentation are their code snippets. These are real-life useable pieces of code that a user can easily plug into their projects if needed, and each snippet is clearly explained.
          </p>

        <li className="question">Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.</li>
          <p>
            One major challenge surrounding DNS configuration for less-technical customers is the visual overwhelm they may experience when encountering a series of letters and numbers that appear to be very crucial. DNS records usually consist of fairly cryptic looking strings, which can be quite intimidating. This can sometimes make a customer hesitant to engage in the configuration or can lead to errors in their setup.
          </p>
          <p>
            Another challenge for less-technical customers is the delay that often come with DNS configuration. Sometimes when configuring a website there’s a delay in propagation, which means the customer doesn’t see their changes right away. This can be frustrating (and sometimes panic inducing) when a critical update is being made. This is why it’s important to educate customers on the realities of the process. 
          </p>

        <li className="question">A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.</li>
          <p>
            To troubleshoot this issue I would begin by gathering and taking stock of all the information I currently have access to and ensure I’m on the same page as the customer. A first step I would take after reviewing the build logs is running a search on the error. It’s possible that this is a common error and there is already a solution for it either in the documentation or on a forum. If there isn’t already a solution after the search, I would check the build scripts to see what the build is trying to do. This will give me a clue as to why the error is persisting. I would also check any dependencies to make sure those are up to date. For this particular error, it looks like this is a fairly common issue with several solutions.
          </p>
          <p>
            Hi Customer,
          </p>
          <p>
            Thanks so much for reaching out to us about the issue you’re currently experiencing with your site build. We understand how important it is to resolve this quickly.  
          </p>
          <p>
              To assist you, we’d like to offer some initial suggestions:
          </p>
          <ul>
            <li>Please check your path to Home file. When the path to Home file is incorrect it can lead to site build errors.</li>
            <li>Ensure that your base directory is specified in your Netlify settings. You can do this by going to "Settings" then "Build and Deploy" then "Edit Settings" and filling in the base directory with "client."</li>
          </ul>
          <p>
            After you’ve had a chance to try the above steps, please let us know if this issue is persisting or you’re encountering any other challenges. Our team is here to support you throughout the troubleshooting process. If you have any questions or require further assistance, please feel free to reach out.
          </p>
          <p>Best, Netlify</p>

        <li className="question">How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site.</li>
          <p>
          To set up an http 301 status redirect on my site I would use a _redirects file in my project. I would create a file called _redirects and add /netlify/anything https://www.google.com/search?q=anything 301 to it. For a proxy redirect I would add /netlify/* https://www.google.com/search?q=:splat 200. 
          </p>

        <li className="question">Please attempt to deploy a function on our service. This need not be complicated. It could be "Hello World". Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.</li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna vel nisl aliquet, eu dignissim justo pellentesque. Cras lacinia, quam eget fringilla tempus, metus urna tincidunt lectus, eget ultricies justo nisl in risus. Praesent vel convallis quam.
          </p>
        <li className="question">We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna vel nisl aliquet, eu dignissim justo pellentesque. Cras lacinia, quam eget fringilla tempus, metus urna tincidunt lectus, eget ultricies justo nisl in risus. Praesent vel convallis quam.
          </p>
      </ol>
      <footer>
        <p className="footer">
          Check out the <a href="https://github.com/maryrobinrose/netlify" target="_blank">repo for this site here.</a>
        </p>
      </footer>
    </>
  )
}

export default App
