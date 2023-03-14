import React, { useState, useEffect } from "react";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Button,
} from "reactstrap";

import { isNumeric } from "utils";

function PagingCustom(props) {
  const { pageCurrent, totalItem, pageSize, setPageCurrent } = props;
  const [page, setPage] = useState(pageCurrent);

  useEffect(() => {
    setPage(pageCurrent);
  }, [pageCurrent]);

  const calTotalPage = (size, total) => {
    var result =
      total % size === 0 ? total / size : Math.floor(total / size) + 1;
    return result;
  };

  const handleGoToPage = (value) => {
    var newValue = Number(value);
    var total = calTotalPage(pageSize, totalItem);

    if (!isNumeric(newValue)) {
      newValue = 1;
    }

    if (newValue < 1) {
      newValue = 1;
    }

    if (newValue > total) {
      newValue = total;
    }

    setPage(newValue);
    setPageCurrent(newValue);
  };

  const handlePreviousPage = () => {
    setPageCurrent((prev) => (prev -= 1));
  };

  const handleNextPage = () => {
    setPageCurrent((prev) => (prev += 1));
  };

  const renderItem = (total, pageCurrent) => {
    var list_page = [];
    for (var i = 0; i < total; i++) {
      list_page.push(i + 1);
    }

    return list_page.map((item) => {
      if (item === pageCurrent) {
        return (
          <PaginationItem
            className="active"
            key={item}
            onClick={() => handleGoToPage(item)}
          >
            <PaginationLink href="#">{item}</PaginationLink>
          </PaginationItem>
        );
      } else {
        return (
          <PaginationItem key={item} onClick={() => handleGoToPage(item)}>
            <PaginationLink href="#">{item}</PaginationLink>
          </PaginationItem>
        );
      }
    });
  };

  const renderPage = (pageSize, totalPage, pageCurrent) => {
    if (totalItem > pageSize) {
      if (totalPage <= 5) {
        return (
          <>
            <Pagination className="pagination justify-content-center mb-0">
              {pageCurrent === 1 ? (
                <PaginationItem className="disabled">
                  <PaginationLink href="#" previous />
                </PaginationItem>
              ) : (
                <PaginationItem onClick={() => handlePreviousPage()}>
                  <PaginationLink href="#" previous />
                </PaginationItem>
              )}

              {renderItem(totalPage, pageCurrent)}

              {pageCurrent === totalPage ? (
                <PaginationItem className="disabled">
                  <PaginationLink href="#" next />
                </PaginationItem>
              ) : (
                <PaginationItem onClick={() => handleNextPage()}>
                  <PaginationLink href="#" next />
                </PaginationItem>
              )}
            </Pagination>
          </>
        );
      } else {
        return (
          <Pagination className="pagination justify-content-center mb-0">
            {pageCurrent === 1 ? (
              <PaginationItem className="disabled">
                <PaginationLink href="#" previous />
              </PaginationItem>
            ) : (
              <PaginationItem onClick={() => handlePreviousPage()}>
                <PaginationLink href="#" previous />
              </PaginationItem>
            )}

            <PaginationItem className="d-flex align-items-center mx-1">
              <Input
                bsSize="sm"
                style={{ maxWidth: "75px" }}
                placeholder="Số trang"
                value={page}
                type="text"
                onChange={(e) => {
                  var re = /^[0-9\b]+$/;
                  var value = e.target.value;
                  if (value !== "" && re.test(value)) {
                    setPage(value);
                  } else {
                    if (value === "") {
                      setPage("");
                    }
                  }
                }}
              />
              <small className="mr-2"></small>
              {pageCurrent} / {totalPage}
              <Button
                className="ml-2"
                color="primary"
                size="sm"
                onClick={() => handleGoToPage(page)}
              >
                Đi đến
              </Button>
            </PaginationItem>

            {pageCurrent === totalPage ? (
              <PaginationItem className="disabled">
                <PaginationLink href="#" next />
              </PaginationItem>
            ) : (
              <PaginationItem onClick={() => handleNextPage()}>
                <PaginationLink href="#" next />
              </PaginationItem>
            )}
          </Pagination>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <>{renderPage(pageSize, calTotalPage(pageSize, totalItem), pageCurrent)}</>
  );
}

export default PagingCustom;
