import * as React from 'react';
import moment from 'moment';
import { Box, Image, Link, Text } from '@chakra-ui/react';

const PLACEHOLDER_IMAGE =
  'https://temp.media/?height=390&width=780&text=No_Image&category=&color=';

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
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          fallbackSrc={PLACEHOLDER_IMAGE}
        />
      </Link>
      <Box p="6">
        <Box
          color="grey.400"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
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
