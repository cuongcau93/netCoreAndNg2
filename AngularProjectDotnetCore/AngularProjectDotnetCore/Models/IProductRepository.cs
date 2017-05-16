using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProjectDotnetCore.Models
{
    interface IProductRepository
    {
        void Add(Products item);
        IEnumerable<Products> GetAll();
        Products Find(long key);
        void Update(Products item);
    }
}
