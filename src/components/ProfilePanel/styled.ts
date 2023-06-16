"use client";

import styled from "styled-components";

export const StyledProfile = styled.div`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const StyledAvatar = styled.div`
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  font-size: 40px;
  line-height: 52px;
  border-radius: 50%;
  color: #212830;
  background-color: #d5e4f7;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled.span`
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
`;
