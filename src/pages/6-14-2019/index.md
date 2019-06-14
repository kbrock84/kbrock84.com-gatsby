---
path: "/github-driven-debugging"
title: "GitHub Driven Debugging"
category: "Debugging"
keywords:
  [
    "GitHub",
    "debugging",
    "issues",
    "issue",
    "pullrequest",
    "opensource",
    "developer",
    "development",
    "software",
    "web",
  ]
---

These days, there are many tools at your disposal for debugging, no matter what your stack is. But after hours of no results, sometimes you need to look beyond your code to understand... your code.

GitHub is huge, and almost all of the open source projects I use are hosted on it. This is _my_ process for debugging issues via GitHub.

## Check the README.MD and Docs

The first step I always take is reading through the project's `README.MD` file. Check for known issues or a debugging guide and be sure you are using the project as intended.

If I don't have any luck in the readme I read through the docs, if any. Typically I start by searching for the specific part of the library that I am using, and then expand my search to see if there is a better way to accomplish what I am trying.

## Digging into the Issues

I often search GitHub issues, while debugging errors from external libraries, to see if other people have similar problems. Many times this is the easiest way to find a fix.

If there are many people with the same issue, you may need to dig deep through one or more issues to find a resolution. The solution can be buried deep in all the comments. Be sure to check open issues, then closed issues. I find most fixes in a closed issue, but if it's a problem with the library you're on a wild goose chase in the closed issues. My favorite way to keep track of these issue comments is with bookmarks in my browser:

1. Click the 3 dots on the top right of the comment.
2. Click `Copy Link`.
3. Paste it in as the URL and navigate to the new link. You should see that the comment is now highlighted.
4. Bookmark the page before doing anything else. If you click out of the comment you will loose the comment address and the bookmark will be for the issue itself.

## Digging into the Source Code

If I don't find a fix in the issues (or if I'm just curious) I dig into the source code of the project - especially the parts I'm using and how the project initializes. Having an awareness of the inner workings of your tools can come in very handy. I can't tell you how many times I've spent hours debugging an issue, only to spend 15 minutes looking at the source code and having that **"OH THAT'S WHY!"** moment.

Some projects are very large and complex, so digging into the source may sound (and be) overwhelming, but I believe it's especially worth it for projects you commonly use.

## The Last Resort (Creating an Issue)

### But why is this the last resort?

To rephrase the question: why should you exhaust all other options before creating an issue on GitHub?

Most GitHub project maintainers are working on open source in their spare time and that time is precious. You want to be sure that your issue is not a duplicate and that you clearly understand the problem you are having (at least as much as you possibly can).

One of the greatest advantages you have from the time spent reading the docs, issues and source code, is deeper knowledge of the project. This will not only help you describe your issue, but also understand feedback from the maintainers. If you've taken the time to read through the source code and feel the issue has something to do with the project, you can submit a pull request to fix it. Just be sure you have reviewed the projects `CONTRIBUTING.MD` if there is one.

### So what makes a good issue?

First: **Be kind and respectful**. The project you are using is being provided for **free**. It's okay to be frustrated, but don't vent your frustration to the maintainers. They have enough to deal with.

Second: It's okay if the initial issue has a lot of information.

You should be able to reproduce your issue in a small project with minimal code to get it running (and breaking). Provide this code, or a link to it. Also include the exact error message you get from the code. The maintainers may not be able to reproduce the error with the code you provide.

Include the exact steps taken to reproduce the error as numbered items. Test these steps yourself before submitting to ensure you don't miss anything.

Provide any and all relevant information about your setup. Include things like the operating system you are using, browsers tested in, other libraries/frameworks used etc. Dig deep into what may be affecting your program.

Format for readability. Use white space and headings to group your issue into logical blocks. Include screenshots and code snippets as necessary. GitHub uses Markdown. Read through the [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) guide if you are not familiar.

You made it to the end! That's all for now. Thanks for reading!
