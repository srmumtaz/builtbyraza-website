import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "md",
        match: {
          include: "hero",
        },
        fields: [
          { type: "string", name: "seoTitle", label: "Browser title", required: true },
          { type: "string", name: "seoDescription", label: "Search description", required: true, ui: { component: "textarea" } },
          { type: "string", name: "eyebrow", label: "Eyebrow", required: true },
          { type: "string", name: "headlineLine1", label: "Headline line 1", required: true },
          { type: "string", name: "headlineLine2", label: "Headline line 2", required: true },
          { type: "string", name: "headlineLine3", label: "Headline line 3", required: true },
          {
            type: "string",
            name: "introduction",
            label: "Introduction",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "primaryButton",
            label: "Primary button",
            required: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          {
            type: "object",
            name: "secondaryButton",
            label: "Secondary button",
            required: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          { type: "string", name: "aboutEyebrow", label: "About eyebrow", required: true },
          {
            type: "string",
            name: "aboutHeading",
            label: "About heading",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutParagraph1",
            label: "About paragraph 1",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutParagraph2",
            label: "About paragraph 2",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutParagraph3",
            label: "About paragraph 3",
            required: true,
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "aboutLink",
            label: "About link",
            required: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          { type: "string", name: "technologyEyebrow", label: "Technology section eyebrow", required: true },
          { type: "string", name: "technologyHeading", label: "Technology section heading", required: true },
          {
            type: "object",
            name: "technologyCards",
            label: "Technology cards",
            list: true,
            required: true,
            fields: [
              { type: "string", name: "number", label: "Number", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "description", label: "Description", required: true, ui: { component: "textarea" } },
            ],
          },
          { type: "string", name: "interestsEyebrow", label: "Interests section eyebrow", required: true },
          { type: "string", name: "interestsHeading", label: "Interests section heading", required: true },
          {
            type: "object",
            name: "interestCards",
            label: "Interest cards",
            list: true,
            required: true,
            fields: [
              { type: "string", name: "number", label: "Number", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "description", label: "Description", required: true, ui: { component: "textarea" } },
            ],
          },
          { type: "string", name: "contactEyebrow", label: "Contact eyebrow", required: true },
          { type: "string", name: "contactHeading", label: "Contact heading", required: true },
          { type: "string", name: "contactIntroduction", label: "Contact introduction", required: true, ui: { component: "textarea" } },
          { type: "string", name: "contactSectionEyebrow", label: "Contact section eyebrow", required: true },
          { type: "string", name: "contactSectionHeading", label: "Contact section heading", required: true },
          { type: "string", name: "contactText", label: "Contact text", required: true, ui: { component: "textarea" } },
          { type: "string", name: "contactEmail", label: "Contact email", required: true },
          { type: "string", name: "contactLocation", label: "Location", required: true },
        ],
        ui: {
          router: () => "/",
        },
      },
      {
        name: "sitePage",
        label: "Site Pages",
        path: "content/pages",
        format: "json",
        fields: [
          { type: "string", name: "styleKey", label: "Page style", required: true, ui: { component: "hidden" } },
          { type: "string", name: "route", label: "Route", required: true },
          { type: "string", name: "seoTitle", label: "Browser title", required: true },
          { type: "string", name: "seoDescription", label: "Search description", required: true, ui: { component: "textarea" } },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            required: true,
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow", required: true },
              { type: "string", name: "heading", label: "Heading", required: true, ui: { component: "textarea" } },
              { type: "string", name: "introduction", label: "Introduction", required: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "meta",
                label: "Metadata",
                list: true,
                fields: [{ type: "string", name: "text", label: "Text", required: true }],
              },
            ],
          },
          { type: "string", name: "linkedinUrl", label: "LinkedIn URL" },
          { type: "string", name: "contactEmail", label: "Contact email" },
          {
            type: "string",
            name: "profile",
            label: "Resume profile paragraphs",
            list: true,
            ui: { component: "textarea" },
          },
          { type: "string", name: "expertise", label: "Core expertise", list: true },
          {
            type: "object",
            name: "experience",
            label: "Professional experience",
            list: true,
            fields: [
              { type: "string", name: "employer", label: "Employer", required: true },
              { type: "string", name: "title", label: "Job title", required: true },
              { type: "string", name: "dates", label: "Dates", required: true },
              { type: "string", name: "summary", label: "Work summary", list: true, ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "education",
            label: "Education",
            list: true,
            fields: [
              { type: "string", name: "credential", label: "Credential", required: true },
              { type: "string", name: "institution", label: "Institution", required: true },
            ],
          },
          { type: "string", name: "certifications", label: "Certifications", list: true },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            required: true,
            fields: [
              { type: "string", name: "layout", label: "Layout", required: true, options: ["split", "cards", "list", "diagram", "status"] },
              { type: "boolean", name: "alternate", label: "Light background" },
              { type: "string", name: "cardKind", label: "Card style", options: ["standard", "project", "roadmap"] },
              { type: "string", name: "eyebrow", label: "Eyebrow", required: true },
              { type: "string", name: "heading", label: "Heading", required: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                fields: [{ type: "string", name: "text", label: "Text", required: true, ui: { component: "textarea" } }],
              },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "status", label: "Status" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "href", label: "Link" },
                  { type: "string", name: "linkLabel", label: "Link label" },
                  { type: "string", name: "text", label: "List text" },
                  { type: "string", name: "label", label: "Status label" },
                  { type: "string", name: "value", label: "Status value" },
                ],
              },
              { type: "string", name: "placeholder", label: "Placeholder text" },
            ],
          },
        ],
        ui: {
          router: ({ document }) => document.route,
        },
      },
      {
        name: "siteSettings",
        label: "Header & Footer",
        path: "content/settings",
        format: "json",
        match: { include: "site" },
        fields: [
          { type: "string", name: "brand", label: "Site name", required: true },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            required: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          { type: "string", name: "footerTagline", label: "Footer tagline", required: true },
          { type: "string", name: "footerCredit", label: "Footer credit", required: true },
        ],
        ui: { router: () => "/" },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Eyebrow",
          },
          {
            type: "string",
            name: "title",
            label: "Headline",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Tagline",
            isBody: true,
          },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Primary button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Secondary button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
        ],
        ui: {
          // Opens the /tinacms-demo page for visual editing. Change or remove to fit your site.
          router: () => "/tinacms-demo",
        },
      },
    ],
  },
});
