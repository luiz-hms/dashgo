import { Stack, HStack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onePageChange={() => {}} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onePageChange={onPageChange}
              />
            );
          })}
        <PaginationItem
          number={currentPage}
          isCurrent
          onePageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onePageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onePageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
