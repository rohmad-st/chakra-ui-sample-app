import { Box, Image, Link, Text } from '@chakra-ui/react';
import moment from 'moment';
import * as React from 'react';

export default function ArticleCard({
  imageUrl,
  title,
  status,
  createdAt,
  authorName,
  sourceName,
  sourceUrl,
  ...rest
}) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      {...rest}
    >
      <Link href={sourceUrl} target="_blank">
        <Image src={imageUrl} alt={title} />
      </Link>
      <Box p="6">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          Published on {moment(createdAt).format('MMMM DD, YYYY')} &bull; Source{' '}
          <Link href={sourceUrl}>{sourceName}</Link>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box>
          <Text fontWeight="light">By {authorName}</Text>
        </Box>
      </Box>
    </Box>
  );
}
