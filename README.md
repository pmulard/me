# Installation and Testing

### Install

Install necessary dependencies.

```bash
yarn install
```

### Run Locally

Navigate to the project directory to run the project.

```bash
yarn start
```

If encountering `Error: error:0308010C:digital envelope routines::unsupported`, you may need to downgrade to Node.js v16 per 
this [StackOverflow article](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).

After enabling the legacy OpenSSL provider per the instructions, try starting the project again. If it runs without issue,
navigate to [http://localhost:3000](http://localhost:3000) to view.

# Deployment

This website is deployed using GitHub Pages. Before running the commands below, make sure git is tracking the correct
branch that is to be deployed. Avoid touching the gh-pages branch - it automatically updates with build files when
finishing the deployment process.

### Build

First build the project.

`npm run predeploy` OR `npm run build`

### Deploy

Then deploy the build to github pages.

`npm run deploy` OR `gh-pages -d build`

### Configure Custom Domain (Optional)

If using a custom domain, GitHub pages will reset the host URL upon each deployment. This will default to a github.io
website.

To set up the custom domain, navigate to the Settings tab of the repo, then click Pages on the left hand drop down menu.
At the bottom of this screen, fill in the custom domain name and click Save. After a few minutes, the new build will be
live at that domain.