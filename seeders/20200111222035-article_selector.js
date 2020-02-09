'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ArticleSelectors', [
      {
        title: "",
        category: "",
        author: "",
        published_at: "",
        content: "",
        site_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".articlehead h1",
        category: ".rovathead h2 a",
        author: ".articlehead .article_author",
        published_at: ".articlehead .article_published span",
        content: ".articlenode .article_text",
        site_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".heading .the_title",
        category: ".heading .the_category",
        author: ".post_content .author_url",
        published_at: ".post_content .the_post_date",
        content: ".post_content .the_content > :not(.facebook_comments_trigger, #the_share_under)",
        site_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "#headline h1",
        category: "#headline .byline__category a",
        author: "#headline .byline__authors a",
        published_at: "#headline .byline__info span:nth-of-type(5)",
        content: "#content-main article > :not(footer)",
        site_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".content-title h1",
        category: ".cikk-cimkek li:first-of-type",
        author: ".szerzo a",
        published_at: ".datum span:first-of-type",
        content: ".cikk-torzs > :not(.m-automatic-file-snippet, .nm_mini__wrapper, .nm_widget__wrapper)",
        site_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".o-post__title span",
        category: ".o-articleHead__catWrap:first-of-type",
        author: ".m-author__authorLinkWrap a",
        published_at: ".m-author__wrapCatDateTitulus",
        content: ".post-body",
        site_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "#article-head h1",
        category: "#breadcrumb a",
        author: ".article-author",
        published_at: "#article-date",
        content: "#article-text",
        site_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".article-page-main-title",
        category: "#breadcrumb a",
        author: ".top-bar",
        published_at: ".top-bar",
        content: "#article-content > :not(.fb-share-button)",
        site_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".article-title",
        category: ".article-info .info .uppercase",
        author: ".author-name",
        published_at: ".article-datetime",
        content: ".article-main",
        site_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: ".box.breadcrumb li:last-of-type a",
        author: "#mainCikkBody + .cikkbar  .szerzoText div:last-of-type",
        published_at: "#mainCikkBody + .cikkbar .update_time",
        content: ".cikkbody clr",
        site_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: "",
        author: ".toolbar a",
        published_at: ".datum",
        content: ".szoveg",
        site_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: "",
        author: ".articletext span:first-of-type",
        published_at: ".info",
        content: ".text",
        site_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".inner_content h1",
        category: "",
        author: ".author span span",
        published_at: ".date",
        content: ".content",
        site_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      { 
        title: ".story-title.entry-title",
        category: ".img-cat",
        author: ".author-info-wrap .author-name a",
        published_at: "#left-content time",
        content: "#content-area > :not(#wpdevar_comment_3, .post-tags)",
        site_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: ".en-article-header-column a",
        author: ".en-article-header-column a",
        published_at: ".en-article-dates-main",
        content: ".entry-content",
        site_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1:first-of-type",
        category: "",
        author: ".note-block .text-wrap",
        published_at: ".note-block + p",
        content: ".maincontent8",
        site_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: "",
        author: ".en-article-author",
        published_at: ".en-article-dates-main",
        content: ".entry-content",
        site_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "h1",
        category: "",
        author: ".field--name-username a",
        published_at: ".region-content > .node--type-article .field--name-node-post-date",
        content: ".article-content-elements",
        site_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "#content > .article:first-of-type h1",
        author: "#content > .article:first-of-type .news .author a",
        published_at: "#content > .article:first-of-type .news .timestamp",
        category: "#content > .article:first-of-type .tags a",
        content: "#content > .article:first-of-type .left",
        site_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".header h1",
        category: ".author-area > .list li:first-of-type",
        author: ".author-holder .text",
        published_at: ".author-holder time",
        content: ".ststst",
        site_id: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      { 
        title: ".home_title h1",
        category: "",
        author: ".editors",
        published_at: ".datum",
        content: ".content > :not(#szerk, #disqus_thread)",
        site_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: ".main-article-header h1",
        category: ".main-article-header .tag",
        author: ".meta-data.track-cat .byline",
        published_at: ".meta-time",
        content: ".entry-content",
        site_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ArticleSelectors', null, {});
   
  }
};
