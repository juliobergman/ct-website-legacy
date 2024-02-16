import { boot } from "quasar/wrappers";

// Logo
import LogoIcon from "../components/logo/icon.vue";
import LogoText from "../components/logo/text.vue";
import LogoWebsiteText from "../components/logo/websiteText.vue";
// Layouts
import LayoutMainHeader from "../components/layout/main/header.vue";
import LayoutMainFooter from "../components/layout/main/footer.vue";
import LayoutFooterComponent from "../components/layout/main/footerComponent.vue";
import darkModeHeaderButton from "../components/layout/main/btn/darkMode.vue";
// Misc
import HomeCarousel from "../components/misc/homeCarousel.vue";

// Ui
import uiDefaultButton from "../components/ui/btn/defaultButton.vue";
import uiLocaleButton from "../components/ui/btn/localeButton.vue";
import uiDefaultLink from "../components/ui/defaultLink.vue";
import uiTextComponent from "../components/ui/textComponent.vue";

//Home
import HomeParallax from "../components/home/parallaxComponent.vue";
import HomeMainCard from "../components/home/mainCard.vue";
import HomePostSection from "../components/home/postSection.vue";
import HomePostSectionLatest from "../components/home/section/postLatest.vue";
import HomePostCard from "../components/home/postCard.vue";

// Media
import mediaImageContainer from "../components/media/imageContainer.vue";
import mediaImageThumbnail from "../components/media/imageThumbnail.vue";

// Blog
import blogFeaturedPost from "../components/blog/home/featuredPost.vue";
import postGridContainer from "../components/blog/postGridContainer.vue";
import postColumnContainer from "../components/blog/postColumnContainer.vue";
import blogPostThumbnail from "../components/blog/postThumbnail.vue";

import blogUserInsert from "../components/blog/userInsert.vue";

import postCategoryChip from "../components/blog/post/categoryChip.vue";
import postTitle from "../components/blog/post/postTitle.vue";
import postBlockSelector from "../components/blog/post/blockSelector.vue";
import postTextBlock from "../components/blog/post/content/textBlock.vue";
import postImageBlock from "../components/blog/post/content/imageBlock.vue";

import postGalleryBlock from "../components/blog/post/content/galleryBlock.vue";
import postGalleryGrid from "../components/blog/post/content/gallery/typeGrid.vue";
import postGalleryCarousel from "../components/blog/post/content/gallery/typeCarousel.vue";
import postVideoBlock from "../components/blog/post/content/videoBlock.vue";
import postTableBlock from "../components/blog/post/content/tableBlock.vue";

export default boot(async ({ app }) => {
  // Logo
  app.component("logo-icon", LogoIcon);
  app.component("logo-text", LogoText);
  app.component("logo-website-text", LogoWebsiteText);
  // Layouts
  app.component("main-header", LayoutMainHeader);
  app.component("main-footer", LayoutMainFooter);
  app.component("footer-component", LayoutFooterComponent);
  app.component("btn-dark-mode-header", darkModeHeaderButton);
  // Misc
  app.component("home-carousel", HomeCarousel);

  // Ui
  app.component("d-btn", uiDefaultButton);
  app.component("d-link", uiDefaultLink);
  app.component("d-text", uiTextComponent);
  app.component("btn-locale", uiLocaleButton);

  //Home
  app.component("home-parallax", HomeParallax);
  app.component("home-card", HomeMainCard);
  app.component("home-post-section", HomePostSection);
  app.component("home-latest-posts", HomePostSectionLatest);
  app.component("home-post-card", HomePostCard);

  // Media
  app.component("ct-image", mediaImageContainer);
  app.component("ct-thumb", mediaImageThumbnail);

  // Blog
  app.component("post-chip", postCategoryChip);
  app.component("blog-post-title", postTitle);

  app.component("blog-featured-post", blogFeaturedPost);
  app.component("post-grid", postGridContainer);
  app.component("post-column", postColumnContainer);

  app.component("blog-post-thumbnail", blogPostThumbnail);
  app.component("blog-user-insert", blogUserInsert);
  app.component("post-block-selector", postBlockSelector);
  app.component("post-block-text", postTextBlock);
  app.component("post-block-image", postImageBlock);
  app.component("post-block-gallery", postGalleryBlock);
  app.component("post-gallery-grid", postGalleryGrid);
  app.component("post-gallery-carousel", postGalleryCarousel);
  app.component("post-block-video", postVideoBlock);
  app.component("post-block-table", postTableBlock);
});
