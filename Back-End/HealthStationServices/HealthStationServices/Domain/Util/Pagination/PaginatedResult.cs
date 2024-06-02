﻿namespace HealthStationServices.Domain.Util.Pagination;

public class PaginatedResult<T> where T : class
{
    public IList<T> Results { get; set; }
    public int CurrentPage { get; set; }
    public int PageCount { get; set; }
    public int PageSize { get; set; }
    public int RowCount { get; set; }

    public int FirstRowOnPage => (CurrentPage - 1) * PageSize + 1;
    public int LastRowOnPage => Math.Min(CurrentPage * PageSize, RowCount);
    public bool HasNextPage => CurrentPage < PageCount;
    public bool HasPreviousPage => CurrentPage > 1;

    public PaginatedResult()
    {
        Results = new List<T>();
    }
}