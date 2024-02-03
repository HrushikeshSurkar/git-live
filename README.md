# GitLive404

> [!NOTE]
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

# Steps to Deploy Angular 17 Project on Github pages

1. Install the latest version of the Angular CLI globally and create a new Angular project.
   ```
       npm install -g @angular/cli
       ng new your-angular-project --defaults
       cd your-angular-project
   ```
2. By default the Angular CLI initializes a Git repository for you.
   To add a new remote for GitHub, use the git remote add command:
   ```
       git remote add origin https://github.com/<username>/<repositoryname>.git
   ```
   ##### **Hints**

- Create a new empty GitHub repository first.
- Replace <username> and <repositoryname> with your username from GitHub and the name of your new repository.
- Please enter the URL https://github.com/<username>/<repositoryname>.git into your browser you should see your existing repository on GitHub.
- Please double-check that you have the necessary rights to make changes to the given project!

3. Add angular-cli-ghpages to your project.
   ```
   ng add angular-cli-ghpages
   ```
4. Deploy your project to GitHub pages with all default settings. Your project will be automatically built in production mode.
   ```
   ng deploy --base-href=/<repositoryname>/
   ```
   Which is the same as:
   ```
   ng deploy your-angular-project --base-href=/<repositoryname>/
   ```

> [!CAUTION]
> Please be aware of the --base-href option. It is necessary when your project will be deployed to a non-root folder.

## **Your project should be available at https://<username>.github.io/repositoryname.**
