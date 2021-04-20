import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    #components-layout-demo-fixed-sider .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
    .site-layout .site-layout-background {
      background: #fff;
      box-shadow: 3px 3px 20px #dbd9d9;
    }
    .site-layout {
      min-height: 100vh;
    }
    .ant-upload-list-item-card-actions {
      display: none;
    }
    .ant-input-number {
      width: 200px;
    }
    .ant-layout-sider-trigger{
      background-color: #fff;
      color: #000;
      border-top: 1px solid #eee;
    }
    .ant-popover-inner-content{
      width: 300px;
    }
    .ant-pagination{
      margin-top: 15px;
      text-align: end;
    }
    /************* content-list / ADD / Merchant Brand Name/ID 头像  ***************/
    .merchant_select_wraper{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &_content {
        display: flex;
        flex-direction: column;
        span {
          line-height: 14px;
          font-size: 12px;
          font-weight: bold;
          &:nth-child(2){
            color: #afadad;
            font-weight: normal;
          }
        }
        margin-left: 5px;
      }
      .ant-avatar-circle {
        width: 23px;
        height: 23px;
      }
    }
    /********************************************************************************/
`;

export default GlobalStyle;
