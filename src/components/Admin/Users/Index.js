import React, { useState,useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/user';


export default function Index() {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	 const dispatch = useDispatch();
	 const {userList} = useSelector(state => state.user);
	  const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	}
	let token_ = localStorage.getItem('token');

	useEffect(() => {
		 dispatch(fetchUsers({token : token_}));
	  }, [])
	  console.log(userList);
  return (
    <>
  <div class="card shadow mb-4">
	<div class="card-header py-3 forms">
		<div class="row form-row mb-2">
			<div class="col-sm-6 d-flex">
				<h6 class="title my-auto">Users list</h6>
			</div>
			<div class="col-sm-6 text-right">
								<a href="https://relibazar.com/admin/add-testimonial" class="btn btn-sm btn-success" data-tooltip="Add"><i class="fa fa-plus"></i></a>
												<a href="javascript:void(0)" class="btn btn-sm btn-danger" onclick="deleteCategory('all',0)" data-tooltip="Delete"><i class="fa fa-trash"></i></a>
								<a href="javascript:void(0)" onclick="resetSearch()" class="btn btn-sm btn-primary" data-tooltip="Reset"><i class="fa fa-sync"></i></a>
			</div>
		</div>
		<div class="row form-row">
			<input type="hidden" id="sortByField" value=""/>
			<input type="hidden" id="sortBy" value=""/>
			<div class="col-sm-4 col-md-3 col-lg-2 col-xl-2">
				<div class="form-group">
					<select class="form-control select2-nosearch select2-hidden-accessible" id="perPage" onchange="searchFilter()" data-select2-id="perPage" tabindex="-1" aria-hidden="true">
						<option value="5">5 Per Page</option>
						<option value="10" selected="" data-select2-id="2">10 Per Page</option>
						<option value="20">20 Per Page</option>
						<option value="50">50 Per Page</option>
						<option value="100">100 Per Page</option>
						<option value="10000000000">All</option>
					</select>
				</div>
			</div>
			<div class="col-sm-8 col-md-9 col-lg-6 col-xl-3">
				<div class="form-group">
					<input type="text" class="form-control" autocomplete="off" id="keyword" placeholder="Search" onkeyup="searchFilter()"/>
				</div>
			</div>
			<div class="col-sm-6 col-md-6 col-lg-2 col-xl-2">
				<div class="form-group">
					<select class="form-control select2-nosearch select2-hidden-accessible" id="status" onchange="searchFilter()" data-select2-id="status" tabindex="-1" aria-hidden="true">
						<option value="" selected="" data-select2-id="4">Select Status</option>
						<option value="1">Active</option>
						<option value="2">In-Active</option>
					</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-6 col-lg-2 col-xl-3">
				<div class="form-group">
				<DatePicker
            selected={startDate}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
           />  <input type="hidden" value={`${startDate} - ${endDate}`} />
				</div>
			</div>
			
		</div>
	</div>
	<div class="card-body">
		<div class="table-wrap">
			<div class="preloader">
			</div>
			<div class="table-responsive scrollTop">
				<table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
					<thead>
					<tr >
								<th width="50">
									<div class="custom-checkbox">
										<input type="checkbox" class="custom-input checkAll" id="customCheckcheckAll"/>
										<label class="custom-label" htmlFor="customCheckcheckAll"></label>
									</div>
								</th>
								<th width="100">Image</th>
								<th>
									<a href="javascript:void(0)" class="sorting name" onclick="sortBy('name','testimonials.name','ASC')">
										<span class="title">Name</span>
										<span class="sorting-icon">
											<i class="fas fa-sort-up commonSorting name_DESC"></i>
											<i class="fas fa-sort-down commonSorting name_ASC"></i>
										</span>
									</a>
								</th>
	
								<th>
									<a href="javascript:void(0)" class="sorting location" onclick="sortBy('location','testimonials.location','ASC')">
										<span class="title">Email</span>
										<span class="sorting-icon">
											<i class="fas fa-sort-up commonSorting location_DESC"></i>
											<i class="fas fa-sort-down commonSorting location_ASC"></i>
										</span>
									</a>
								</th>
	
								<th>
									<a href="javascript:void(0)" class="sorting created_at" onclick="sortBy('created_at','testimonials.created_at','ASC')">
										<span class="title">Member Since</span>
										<span class="sorting-icon">
											<i class="fas fa-sort-up commonSorting created_at_DESC"></i>
											<i class="fas fa-sort-down commonSorting created_at_ASC"></i>
										</span>
									</a>
								</th>
	   
								<th>Status</th>
								<th>Action</th>
							</tr>
					</thead>
					<tbody id="testimonialsList">
					{userList.length > 0 && userList.map((item,index) => {
                            return (<>
							<tr key={index}>

<td>

	<div class="custom-checkbox">

		<input type="checkbox" class="custom-input singleCheck" id="customCheck5" value="5"/>

		<label class="custom-label" htmlFor="customCheck5"></label>

	</div>

</td>	

<td width="100"><div class="img-container"><a href="https://relibazar.com/assets/admin/img/no-image.jpg" class="d-block w-100 h-100" data-fancybox=""><img src="https://relibazar.com/assets/admin/img/no-image.jpg" alt=""/></a></div></td>


	<td><a href="https://relibazar.com/admin/edit-testimonial/5" target="_blank">{item.name}</a></td>

	<td><a href="https://relibazar.com/admin/edit-testimonial/5" target="_blank"></a>{item.email}</td>

	 <td><a href="https://relibazar.com/admin/edit-testimonial/5" target="_blank">{item.updated_at}</a></td>

	 

	 

<td id="status_td_5"><span class="btn btn-xs btn-success btn-icon-split"><span class="icon text-white-50"><i class="fas fa-check"></i></span><span class="text">Active</span></span></td>



<td>

	<div class="dropdown">

		<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>

		<div class="dropdown-menu dropdown-menu-right">

			
			<a class="dropdown-item" href="https://relibazar.com/admin/edit-testimonial/5"><i class="fas fa-fw fa-edit"></i> Edit</a>

			
			
			<a class="dropdown-item" href="javascript:void(0)" onclick="statusChange(5,2)" id="status_a_5"><i class="fas fa-fw fa-times-circle"></i>  Deactivate</a>

			
		

			
			<a class="dropdown-item" href="javascript:void(0)" onclick="deleteCategory(5,1)"><i class="fas fa-fw fa-trash"></i> Delete</a>

			
		</div>

	</div>

</td>

</tr>
							</>)
						})}
	




</tbody>
				</table>
			</div>
			<div class="row" id="paginationDiv"><div class="col-12">
	<ul class="pagination justify-content-end"><li class="page-number">Showing : 2 of 2</li></ul></div></div>
		</div>
	</div>
</div>
  
 </>
  )
}
