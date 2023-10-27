patchArticleVotes(article_id, value).catch(() => {
  setUserLikes(0);
  setIsError(true);
});
