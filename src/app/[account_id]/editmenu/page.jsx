// メニューを作成するページ
'use client';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import AddMainCategory from '../../components/addMainCategory/addMainCategory';
import AddSubCategory from '../../components/addSubCategory/addSubCategory';
import HomeToolBar from '../../components/homeToolBar/homeToolBar';
import PlusBox from '../../components/plusBox/plusBox';
import SpeedDialTools from '../../components/speedDialTools/speedDialTools';

const product = 
  {Category:
    [{'Category1':
      {SubCategory:
        [{'SubCategory1':
          {Product:
            [{'Product1':
              {price:1000,image:'image',Option:
                [{'Option1':
                  {price:1000,image:'image'}
                },
                {'Option2':
                  {price:1000,image:'image'}
                }]
              }
            },
            {'Product2':
              {price:1000,image:'image',Option:
                [{'Option1':
                  {price:1000,image:'image'}
                },
                {'Option2':
                  {price:1000,image:'image'}
                }]
              }
            }]
          }
        },
        {'SubCategory2':
          [{Product1:
            {price:1000,image:'image',Option:
              [{'Option1':
                {price:1000,image:'image'}
              },
              {'Option2':
                {price:1000,image:'image'}
              }]
            }
          },
          {Product2:
            {price:1000,image:'image',Option:
              [{'Option1':
                {price:1000,image:'image'}
              },
              {'Option2':
                {price:1000,image:'image'}
              }]
            }
          }]
        }]
      }
    },{'Category2':
    {SubCategory:
      [{'SubCategory1':
        {Product:
          [{'Product1':
            {price:1000,image:'image',Option:
              [{'Option1':
                {price:1000,image:'image'}
              },
              {'Option2':
                {price:1000,image:'image'}
              }]
            }
          },
          {'Product2':
            {price:1000,image:'image',Option:
              [{'Option1':
                {price:1000,image:'image'}
              },
              {'Option2':
                {price:1000,image:'image'}
              }]
            }
          }]
        }
      },
      {'SubCategory2':
        [{Product1:
          {price:1000,image:'image',Option:
            [{'Option1':
              {price:1000,image:'image'}
            },
            {'Option2':
              {price:1000,image:'image'}
            }]
          }
        },
        {Product2:
          {price:1000,image:'image',Option:
            [{'Option1':
              {price:1000,image:'image'}
            },
            {'Option2':
              {price:1000,image:'image'}
            }]
          }
        }]
      }]
    }
  }]
  };

  const getCategoryCount = (product) => {
    if (!product || !product.Category || !Array.isArray(product.Category)) {
      return 0;
    }
    const categoryCount = product.Category.length;
    const array = [];
    for(let i = 0; i < categoryCount; i++) {
      const category = product.Category[i];
      array.push(category);
    }
    console.log(array);
    console.log(categoryCount);
    return {'length':product.Category.length,'array':array}
  };
  

export default function EditMenu({props}){
  const [addMainCategory, setAddMainCategory] = React.useState(getCategoryCount(product).length);
  const [addSubCategory, setAddSubCategory] = React.useState(0);
  const [categoriesList, setCategoriesList] = React.useState(getCategoryCount(product).array);
  const [subCategoriesList, setSubCategoriesList] = React.useState(0);
  const [categoryNames, setCategoryNames] = React.useState([]);

  const account_id = 'account_id';

  console.log(addMainCategory);
  console.log(categoriesList);
  

    const addMainCategoryCount = () => {
      console.log('click');
      setAddMainCategory(addMainCategory + 1);
      console.log(categoriesList);
    }

    const addSubCategoryCount = () => {
      console.log('click');
      setAddSubCategory(addSubCategory + 1);
      console.log(addSubCategory);
      console.log(subCategoriesList);
    }

    useEffect(() => {
      const getCategoryNames = () => {
        const namesArray = categoriesList.map(categoryObj => Object.keys(categoryObj)[0]);
        setCategoryNames(namesArray);
        console.log(namesArray);
      };
    
      getCategoryNames();
    }, [categoriesList]);

  return (
    <React.Fragment>
      <HomeToolBar/>
      <Grid container spacing={2} sx={{p:10,pt:5,overflow:'auto'}}>
        <Grid item md={3} >
          <Box sx={{ display: 'flex', flexDirection: 'column', height:'86.3vh',p: 1, border:1, borderRadius:1,overflow:'auto'}}>
            <Card sx={{ display:'flex',maxWidth:'100vw',minHeight: '5vh',border:1,mb:1,borderRadius:0}}>
              <CardActionArea href={`/${account_id}/editmenu/options`}>
                <CardContent sx={{display:'flex',p:0}}>
                  <Box sx={{ p: 1}}>Option</Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Box onClick={addMainCategoryCount}>
              <PlusBox />
            </Box>
            <Box>
                {categoryNames.map((categoryName, index) => (
                  console.log(categoryName),
                  console.log('aaa'),
                <React.Fragment key={index}>
                    <div key={index}>
                      <AddMainCategory categoryName={categoryName} />
                    </div>
                </React.Fragment>
            ))}
            </Box>
          </Box>
        </Grid>
        <Grid item md={9} sx={{overflow:'scroll'}}>
          <Grid item xs={12}>
            <Box onClick={addSubCategoryCount}>
              <PlusBox/>
            </Box>
          </Grid>
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', height:'80vh', p: 1, mt:1, border:1, borderRadius:1, overflowX:'scroll',overflowY:'scroll'}}>
            <Grid item xs={12} >
              {Array.from({ length: addSubCategory }, (_, index) => (
                <AddSubCategory categoryName={'subCategory'} />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 3 }}>
          <SpeedDialTools/>
        </Box>
      </Grid>
    </React.Fragment>
  )
}
