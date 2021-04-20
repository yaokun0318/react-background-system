import { Breadcrumb } from 'antd';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const formatRoute = (route?: string) => {
  if (route?.startsWith('edit')) return 'Edit';
  const head = route?.slice(0, 1).toLocaleUpperCase() ?? '';
  const tail = route?.slice(1).toLocaleLowerCase() ?? '';
  const breadcrumbTail = formatToUpprtCase(tail);
  return `${head}${breadcrumbTail}`;
};
const formatToUpprtCase = (route: string) => {
  const routeArr = route.split('');
  const idx = routeArr.findIndex((_) => _ === '-');
  if (idx === -1) {
    return route;
  }
  routeArr[idx] = ' ';
  routeArr[idx + 1] = routeArr[idx + 1].toLocaleUpperCase();
  let routeStr = routeArr.join('');
  routeStr = formatToUpprtCase(routeStr);
  return routeStr;
};

const MainBreadCrumb = () => {
  const { page, subPage, subPage2 } = useParams<{
    page: string;
    subPage?: string;
    subPage2?: string;
    subPage3?: string;
  }>();
  const pages = [page, subPage, subPage2].filter((p) => !!p) as string[];

  const paths = pages.reduce<Array<{ name: string; link: string }>>(
    (acc, curr) => {
      if (acc.length === 0)
        return [{ name: formatRoute(curr), link: `/main/${curr}` }];
      else
        return acc.concat({
          name: formatRoute(curr),
          link: `${acc[acc.length - 1].link}/${curr}`,
        });
    },
    [],
  );

  return (
    <Breadcrumb style={{ margin: '21px 0' }}>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          {paths.length - 1 === index ? (
            <span>{path.name}</span>
          ) : (
            <Link to={path.link}>{path.name}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default MainBreadCrumb;
