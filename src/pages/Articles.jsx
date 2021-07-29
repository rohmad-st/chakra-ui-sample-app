import * as React from 'react';
import { Alert, AlertIcon, Flex, Spinner } from '@chakra-ui/react';

import { ArticleCard } from '../components';
import { useArticles } from '../hooks';

export default function Articles() {
  const { articles, isEmpty, isLoading } = useArticles();

  if (isLoading) {
    return <Spinner position="absolute" top={400} left="50%" />;
  }

  if (isEmpty) {
    return (
      <Alert status="error">
        <AlertIcon />
        Articles tidak ditemukan.
      </Alert>
    );
  }

  return (
    <Flex
      my="4"
      width="100vw"
      flexDir="column"
      align="center"
      justify="center"
      gridGap={8}
    >
      {articles &&
        articles.map(article => (
          <ArticleCard
            imageUrl={article.urlToImage}
            title={article.title}
            status="New"
            createdAt={article.publishedAt}
            authorName={article.author}
            sourceName={article.source.name || '-'}
            sourceUrl={article.url}
          />
        ))}
    </Flex>
  );
}
