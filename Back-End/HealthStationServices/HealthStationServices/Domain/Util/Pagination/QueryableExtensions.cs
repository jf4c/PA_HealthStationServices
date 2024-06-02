using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Domain.Util.Pagination;

public static class QueryableExtensions
{
    public static async Task<PaginatedResult<T>> GetPaginatedAsync<T>(
        this IQueryable<T> query, 
        int pageIndex, 
        int pageSize, 
        CancellationToken cancellationToken = default) where T : class
    {
        var result = new PaginatedResult<T>
        {
            CurrentPage = pageIndex,
            PageSize = pageSize,
            RowCount = await query.CountAsync(cancellationToken: cancellationToken)
        };

        var pageCount = (double)result.RowCount / pageSize;
        result.PageCount = (int)Math.Ceiling(pageCount);
        var skip = (pageIndex - 1) * pageSize;

        result.Results = await query
            .AsNoTracking()
            .Skip(skip)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return result;
    }
}