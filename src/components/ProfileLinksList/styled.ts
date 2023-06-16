"use client";

import styled from "styled-components";
import Image from "next/image";

export const StyledList = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 16px;
`;

export const StyledListItem = styled.li`
  margin-right: 18px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledListImg = styled(Image)`
  margin-right: 6px;
`;
